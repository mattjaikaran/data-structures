import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, lstatSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, rename, rm, writeFile } from 'node:fs/promises';
import { join, dirname, relative, resolve, sep } from 'node:path';

export function workspacePaths(home, lesson, language) {
  const directory = join(home, 'attempts', lesson.id.replaceAll('/', '__'), language);
  const topicRoot = join(directory, 'topic');
  const localLesson = lesson.id.split('/').slice(1).join('/');
  return { directory, topicRoot, solution: join(topicRoot, localLesson, `solution.${language}`),
    tests: join(topicRoot, localLesson, `tests.${language === 'sql' ? 'py' : language}`),
    manifest: join(directory, 'workspace.json'), localLesson };
}

function checkPaths(home, paths) {
  let current = paths.solution;
  const stop = resolve(home);
  while (resolve(current) !== stop) {
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) throw new Error(`Workspace symlinks are not supported: ${current}`);
    const parent = dirname(current);
    if (parent === current) throw new Error('Workspace escaped its private home');
    current = parent;
  }
}

export function requireWorkspace(home, lesson, language) {
  const paths = workspacePaths(home, lesson, language);
  checkPaths(home, paths);
  if (!existsSync(paths.manifest)) throw new Error(`No attempt exists. Run: npm run practice -- start ${lesson.id} ${language}`);
  const manifest = JSON.parse(readFileSync(paths.manifest, 'utf8'));
  if (manifest.version !== 1 || manifest.lesson !== lesson.id || manifest.language !== language || !existsSync(paths.solution)) {
    throw new Error('Attempt workspace is incomplete or belongs to another exercise');
  }
  return paths;
}

export function splitRustTests(source) {
  const match = /^#\[cfg\(test\)\]\r?\nmod\s+\w+_tests\s*\{/m.exec(source);
  if (!match) throw new Error('Rust solution must end with a cfg(test) exercise module');
  return { implementation: source.slice(0, match.index).trimEnd() + '\n', tests: source.slice(match.index) };
}

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.isDirectory() && ['target', 'node_modules', '__pycache__', '.git', '.venv', '.private'].includes(entry.name)) return [];
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Exercise symlinks are not supported: ${path}`);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}

export async function createWorkspace(root, home, lesson, language) {
  const paths = workspacePaths(home, lesson, language);
  checkPaths(home, paths);
  if (existsSync(paths.directory)) return { ...requireWorkspace(home, lesson, language), created: false };
  await mkdir(dirname(paths.directory), { recursive: true, mode: 0o700 });
  const temporary = await mkdtemp(join(dirname(paths.directory), '.creating-'));
  try {
    const topicRoot = join(root, lesson.topic);
    for (const source of filesUnder(topicRoot)) {
      const name = relative(topicRoot, source);
      const keep = language === 'rs' ? name.endsWith('.rs') || name === 'Cargo.toml'
        : language === 'sql' ? name.endsWith('.sql') || name.endsWith(`${sep}tests.py`)
          : name.endsWith(`.${language}`);
      if (!keep) continue;
      const destination = join(temporary, 'topic', name);
      await mkdir(dirname(destination), { recursive: true });
      await copyFile(source, destination);
    }
    if (language === 'rs') {
      const solution = join(temporary, 'topic', paths.localLesson, 'solution.rs');
      const split = splitRustTests(readFileSync(solution, 'utf8'));
      await writeFile(solution, split.implementation);
      await writeFile(join(dirname(solution), 'tests.rs'), split.tests);
      const manifest = join(temporary, 'topic', 'Cargo.toml');
      await writeFile(manifest, readFileSync(manifest, 'utf8') + '\n[workspace]\n');
      const library = join(temporary, 'topic', 'lib.rs');
      await writeFile(library, readFileSync(library, 'utf8') + `\ninclude!("${paths.localLesson}/tests.rs");\n`);
    }
    await writeFile(join(temporary, 'workspace.json'), JSON.stringify({ version: 1,
      lesson: lesson.id, language, createdAt: new Date().toISOString() }, null, 2) + '\n');
    await rename(temporary, paths.directory);
    return { ...paths, created: true };
  } finally { await rm(temporary, { recursive: true, force: true }); }
}

export async function refreshTrustedTests(root, paths, lesson, language) {
  if (language === 'rs') {
    const source = readFileSync(join(root, lesson.id, 'solution.rs'), 'utf8');
    const destination = join(dirname(paths.solution), 'tests.rs');
    if (existsSync(destination) && lstatSync(destination).isSymbolicLink()) throw new Error('Test file cannot be a symlink');
    await writeFile(destination, splitRustTests(source).tests);
  } else {
    if (existsSync(paths.tests) && lstatSync(paths.tests).isSymbolicLink()) throw new Error('Test file cannot be a symlink');
    await copyFile(join(root, lesson.id, `tests.${language === 'sql' ? 'py' : language}`), paths.tests);
  }
}

export function workspaceFingerprint(paths, language) {
  const hash = createHash('sha256');
  for (const path of filesUnder(paths.topicRoot).filter(path =>
    path.endsWith(`.${language}`) || language === 'sql' && path.endsWith('tests.py') ||
    language === 'rs' && path.endsWith('Cargo.toml')).sort()) {
    hash.update(relative(paths.topicRoot, path)); hash.update('\0'); hash.update(readFileSync(path));
  }
  return hash.digest('hex');
}

export function referenceFingerprint(root, lesson, language) {
  const hash = createHash('sha256');
  hash.update(readFileSync(join(root, lesson.id, `solution.${language}`)));
  if (language !== 'rs') hash.update(readFileSync(join(root, lesson.id, `tests.${language === 'sql' ? 'py' : language}`)));
  return hash.digest('hex');
}

export function lessonTask(root, lesson, language, { paths, selection = lesson.id } = {}) {
  if (language === 'rs') {
    const crateRoot = paths?.topicRoot ?? join(root, lesson.topic);
    const args = ['test', '--manifest-path', join(crateRoot, 'Cargo.toml'), '--lib'];
    if (selection === lesson.id) args.push(`${lesson.id.split('/').at(-1)}_tests::`);
    return { id: `${lesson.id} (rs)`, command: 'cargo', args, cwd: root, requireRustTests: true,
      env: paths ? { CARGO_TARGET_DIR: join(root, 'target', 'attempts', lesson.id.replaceAll('/', '__')) } : {} };
  }
  const test = paths?.tests ?? join(root, lesson.id, `tests.${language === 'sql' ? 'py' : language}`);
  return { id: `${lesson.id} (${language})`, command: { js: 'node', py: 'python3', ts: 'bun', sql: 'python3' }[language],
    args: language === 'py' || language === 'sql' ? ['-B', test] : [test], cwd: root };
}
