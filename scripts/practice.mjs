import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const topics = readdirSync(root, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && /^\d{2}_/.test(entry.name))
  .map(entry => entry.name).sort();
const languages = ['js', 'py', 'ts', 'rs', 'sql'];
const [selection = 'list', language = 'py', ...extra] = process.argv.slice(2);

function fail(message) {
  console.error(message);
  process.exit(1);
}

function lessons(topic) {
  return ['fundamentals', 'problems'].flatMap(section => {
    const directory = join(root, topic, section);
    if (!existsSync(directory)) return [];
    return readdirSync(directory, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => join(topic, section, entry.name));
  }).sort();
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit' });
  if (result.error) fail(`Cannot run ${command}: ${result.error.message}`);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (extra.length) fail('Usage: npm run practice -- <problem-folder|topic|all|list> <js|py|ts|rs|sql>');
if (selection === 'list') {
  for (const topic of topics) {
    for (const lesson of lessons(topic)) {
      const available = languages.filter(ext => existsSync(join(root, lesson, `solution.${ext}`)));
      console.log(`${lesson}  [${available.join(', ')}]`);
    }
  }
  process.exit(0);
}
if (!languages.includes(language)) fail(`Unknown language ${language}. Use ${languages.join(', ')}.`);

const selectedPath = relative(root, resolve(root, selection));
const allLessons = topics.flatMap(lessons);
const selected = selection === 'all' ? allLessons
  : topics.includes(selectedPath) ? lessons(selectedPath)
  : allLessons.includes(selectedPath) ? [selectedPath] : [];
if (!selected.length) fail(`Unknown topic or problem: ${selection}. Run npm run practice -- list.`);

if (language === 'rs') {
  if (selection === 'all') {
    run('cargo', ['test', '--workspace']);
  } else {
    const topic = selectedPath.split(sep)[0];
    if (!existsSync(join(root, topic, 'Cargo.toml'))) fail(`No Rust solutions for ${topic}. Check its README for available languages.`);
    const manifest = readFileSync(join(root, topic, 'Cargo.toml'), 'utf8');
    const crate = manifest.match(/^name\s*=\s*"([^"]+)"/m)?.[1];
    if (!crate) fail(`No Rust crate name in ${topic}/Cargo.toml.`);
    const args = ['test', '-p', crate, '--lib'];
    if (!topics.includes(selectedPath)) {
      const solution = join(root, selectedPath, 'solution.rs');
      if (!existsSync(solution)) fail(`No Rust solution for ${selectedPath}. Check its README for available languages.`);
      const source = readFileSync(solution, 'utf8');
      if (!source.includes('#[test]')) fail(`No Rust tests for ${selectedPath}.`);
      args.push(`${selectedPath.split(sep).at(-1)}_tests::`);
    }
    run('cargo', args);
  }
} else {
  const testExtension = language === 'sql' ? 'py' : language;
  const runnable = selected.filter(lesson =>
    existsSync(join(root, lesson, `solution.${language}`)) &&
    existsSync(join(root, lesson, `tests.${testExtension}`)));
  if (!runnable.length) fail(`No ${language} solution and tests for ${selection}. Check its README for available languages.`);
  const command = { js: 'node', py: 'python3', ts: 'bun', sql: 'python3' }[language];
  for (const lesson of runnable) {
    const args = [join(root, lesson, `tests.${testExtension}`)];
    if (language === 'py' || language === 'sql') args.unshift('-B');
    run(command, args);
  }
  console.log(`Passed ${runnable.length} problem test files (${language}).`);
}
