import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { availableParallelism } from 'node:os';
import { performance } from 'node:perf_hooks';
import { setMaxListeners } from 'node:events';
import { discover, difficulties, filterLessons, languages, selectLessons } from './catalog.mjs';
import { runBatch, printResults } from './runner.mjs';
import { createWorkspace, requireWorkspace, refreshTrustedTests, workspaceFingerprint,
  referenceFingerprint, lessonTask } from './workspace.mjs';
import { readProgress, updateProgress, noteAttempt, recordReview, reviewQueue } from './progress.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const home = resolve(root, process.env.PRACTICE_HOME ?? '.private');
const defaultJobs = Math.min(4, Math.max(1, availableParallelism() - 1));
const valueOptions = new Set(['language', 'topic', 'difficulty', 'pattern', 'query', 'jobs',
  'timeout-ms', 'outcome', 'hints', 'minutes', 'sample']);
const controller = new AbortController();
setMaxListeners(16, controller.signal);
let interruptExitCode = 0;
process.once('SIGINT', () => { interruptExitCode = 130; controller.abort(); });
process.once('SIGTERM', () => { interruptExitCode = 143; controller.abort(); });

function parse(args) {
  const positional = [], options = {};
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (!argument.startsWith('--')) { positional.push(argument); continue; }
    const [name, inline] = argument.slice(2).split(/=(.*)/s);
    if (name === 'json' || name === 'help') {
      if (inline !== undefined) throw new Error(`--${name} takes no value`);
      options[name] = true; continue;
    }
    if (!valueOptions.has(name)) throw new Error(`Unknown option --${name}`);
    const value = inline ?? args[++index];
    if (value === undefined || value.startsWith('--')) throw new Error(`--${name} requires a value`);
    if (options[name] !== undefined) throw new Error(`Duplicate option --${name}`);
    options[name] = value;
  }
  if (options.language && !languages.includes(options.language)) throw new Error(`Use a language from ${languages.join(', ')}`);
  if (options.difficulty && !difficulties.includes(options.difficulty)) throw new Error(`Use a difficulty from ${difficulties.join(', ')}`);
  return { positional, options };
}

function integer(value, fallback, name, maximum = Number.MAX_SAFE_INTEGER) {
  const number = value === undefined ? fallback : Number(value);
  if (!Number.isInteger(number) || number < 1 || number > maximum) throw new Error(`${name} must be an integer from 1 to ${maximum}`);
  return number;
}

function help() {
  console.log(`Practice DSA, ML, and SQL without changing reference solutions.

npm run practice -- list [--query text] [--language py] [--pattern hash-map]
                         [--difficulty easy] [--topic 01_arrays] [--json]
npm run practice -- search "binary search" [filters]
npm run practice -- start <problem-folder> <js|py|ts|rs|sql>
npm run practice -- attempt <problem-folder> <language> [--json]
npm run practice -- record <problem-folder> <language> --outcome solved
                         [--hints 0] [--minutes 15]
npm run practice -- progress [--language py] [--json]
npm run practice -- review [--language py] [--json]
npm run practice -- <problem-folder|topic|all> <language> [--jobs 4] [--json]
npm run practice -- benchmark <topic|all> <language> [--sample 24] [--jobs 4]

References stay under numbered topics. Attempts and progress stay under .private/.
PRACTICE_HOME can select another private location. Start never overwrites an attempt.
Test output stays in catalog order. Default jobs: ${defaultJobs}; Rust uses Cargo.
Reviews use UTC dates; independent passes progress through 1/3/7/14/30/60/120 days.`);
}

function filters(options, query = options.query) {
  return { query, language: options.language, topic: options.topic,
    difficulty: options.difficulty, pattern: options.pattern };
}

function languageFor(value, options) {
  const language = value ?? options.language ?? 'py';
  if (!languages.includes(language)) throw new Error(`Unknown language ${language}. Use ${languages.join(', ')}`);
  if (value && options.language && value !== options.language) throw new Error('Positional language and --language disagree');
  return language;
}

function exactLesson(lessons, selection, language) {
  const selected = selectLessons(root, lessons, selection);
  if (selected.length !== 1 || resolve(root, selected[0].id) !== resolve(root, selection.replaceAll('\\', '/'))) {
    throw new Error('Choose one catalog problem folder, not a topic or an external path');
  }
  const lesson = selected[0];
  if (!lesson.languages.includes(language)) throw new Error(`No ${language} solution for ${lesson.id}`);
  return lesson;
}

function printCatalog(lessons, json) {
  if (json) console.log(JSON.stringify(lessons, null, 2));
  else for (const lesson of lessons) console.log(`${lesson.id}  [${lesson.languages.join(', ')}]  ${lesson.difficulty}  ${lesson.patterns.join(', ')}`);
}

function tasksFor(lessons, selection, language) {
  const selected = selectLessons(root, lessons, selection).filter(lesson => lesson.languages.includes(language));
  if (!selected.length) throw new Error(`No ${language} solution and tests for ${selection}. Use list to find available exercises.`);
  if (language === 'rs' && selection === 'all') return [{ id: 'Rust workspace', command: 'cargo',
    args: ['test', '--workspace'], cwd: root }];
  if (language === 'rs' && selected.length > 1) return [lessonTask(root, selected[0], language, { selection })];
  return selected.map(lesson => {
    const tests = join(root, lesson.id, `tests.${language === 'sql' ? 'py' : language}`);
    if (language !== 'rs' && !existsSync(tests)) throw new Error(`Missing tests for ${lesson.id} (${language})`);
    return lessonTask(root, lesson, language);
  });
}

async function main() {
  const { positional, options } = parse(process.argv.slice(2));
  const [command = 'list', selection, languageArgument, ...extra] = positional;
  if (options.help || command === 'help') { help(); return; }
  if (extra.length) throw new Error('Too many arguments. Run npm run practice -- help');
  const lessons = discover(root);
  const jobs = integer(options.jobs, defaultJobs, 'Jobs', 16);
  const timeoutMs = integer(options['timeout-ms'], 120000, 'Timeout');

  if (command === 'list' || command === 'search') {
    if (languageArgument || command === 'list' && selection) throw new Error('Use --language to filter the catalog');
    if (command === 'search' && !selection) throw new Error('Search requires a quoted query');
    printCatalog(filterLessons(lessons, filters(options, command === 'search' ? selection : options.query)), options.json);
    return;
  }
  if (command === 'progress' || command === 'review') {
    if (selection) throw new Error('Use --language to filter progress and reviews');
    const data = readProgress(home);
    const records = command === 'review' ? reviewQueue(data, { language: options.language })
      : Object.values(data.records).filter(record => !options.language || record.language === options.language)
        .sort((a, b) => a.lesson.localeCompare(b.lesson) || a.language.localeCompare(b.language));
    if (options.json) console.log(JSON.stringify(records, null, 2));
    else if (!records.length) console.log(command === 'review' ? 'No reviews due.' : 'No private attempts recorded.');
    else for (const record of records) console.log(`${record.lesson} [${record.language}] attempts=${record.attempts} independent=${record.independentSolves} hinted=${record.hintedSolves} due=${record.due ?? 'unrated'}`);
    return;
  }
  if (['start', 'attempt', 'record'].includes(command)) {
    if (!selection) throw new Error(`${command} requires one problem folder`);
    const language = languageFor(languageArgument, options);
    const lesson = exactLesson(lessons, selection, language);
    if (command === 'start') {
      const paths = await createWorkspace(root, home, lesson, language);
      const result = { created: paths.created, lesson: lesson.id, language, solution: paths.solution };
      if (options.json) console.log(JSON.stringify(result, null, 2));
      else console.log(`${paths.created ? 'Created' : 'Preserved existing'} attempt: ${paths.solution}\nEdit this file, then run: npm run practice -- attempt ${lesson.id} ${language}`);
      return;
    }
    const paths = requireWorkspace(home, lesson, language);
    if (command === 'record') {
      const record = await updateProgress(home, data => recordReview(data, {
        lesson: lesson.id, language, outcome: options.outcome, hints: Number(options.hints ?? 0),
        minutes: Number(options.minutes ?? 0), fingerprint: workspaceFingerprint(paths, language),
        reference: referenceFingerprint(root, lesson, language),
      }));
      console.log(JSON.stringify(record, null, 2));
      return;
    }
    const referenceBefore = referenceFingerprint(root, lesson, language);
    await refreshTrustedTests(root, paths, lesson, language);
    const fingerprintBefore = workspaceFingerprint(paths, language);
    const results = await runBatch([lessonTask(root, lesson, language, { paths })], { jobs: 1, timeoutMs, signal: controller.signal });
    const fingerprintAfter = workspaceFingerprint(paths, language);
    const referenceAfter = referenceFingerprint(root, lesson, language);
    if (fingerprintBefore !== fingerprintAfter || referenceBefore !== referenceAfter) {
      results[0].passed = false;
      results[0].error = 'Attempt or reference changed during execution. Run the current attempt again.';
    }
    await updateProgress(home, data => noteAttempt(data, { lesson: lesson.id, language,
      passed: results[0].passed, durationMs: results[0].durationMs,
      fingerprint: fingerprintAfter, reference: referenceAfter }));
    printResults(results, options);
    if (results.some(result => !result.passed)) process.exitCode = 1;
    return;
  }
  if (command === 'benchmark') {
    const language = languageFor(languageArgument, options);
    if (language === 'rs') throw new Error('Benchmark js, py, ts, or sql. Cargo already schedules Rust compilation and tests.');
    const allTasks = tasksFor(lessons, selection ?? 'all', language);
    const count = Math.min(integer(options.sample, 24, 'Sample'), allTasks.length);
    const sampled = Array.from({ length: count }, (_, index) => allTasks[Math.floor(index * allTasks.length / count)]);
    const runs = [];
    for (const concurrency of [...new Set([1, jobs])]) {
      const started = performance.now();
      const results = await runBatch(sampled, { jobs: concurrency, timeoutMs, signal: controller.signal });
      runs.push({ jobs: concurrency, durationMs: Math.round(performance.now() - started),
        passed: results.every(result => result.passed), failed: results.filter(result => !result.passed).map(result => result.id) });
    }
    console.log(JSON.stringify({ language, exercises: count, runs,
      speedup: runs.length === 2 ? Number((runs[0].durationMs / runs[1].durationMs).toFixed(2)) : 1 }, null, 2));
    if (runs.some(run => !run.passed)) process.exitCode = 1;
    return;
  }
  const language = languageFor(selection, options);
  if (languageArgument) throw new Error('Too many arguments for a reference run');
  const tasks = tasksFor(lessons, command, language);
  const results = await runBatch(tasks, { jobs: language === 'rs' ? 1 : jobs, timeoutMs, signal: controller.signal });
  printResults(results, options);
  if (results.some(result => !result.passed)) process.exitCode = 1;
}

main().catch(error => { console.error(error.message); process.exitCode = 1; })
  .finally(() => { if (interruptExitCode) process.exitCode = interruptExitCode; });
