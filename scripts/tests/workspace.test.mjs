import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { discover, filterLessons } from '../catalog.mjs';
import { runBatch } from '../runner.mjs';
import { createWorkspace, lessonTask, refreshTrustedTests, workspaceFingerprint } from '../workspace.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));

test('edits stay private, reopening preserves work, and reference tests reject wrong answers', async () => {
  const home = await mkdtemp(join(tmpdir(), 'practice-attempt-'));
  const lesson = discover(root).find(row => row.id === '01_arrays/problems/two_sum');
  const original = await readFile(join(root, lesson.id, 'solution.js'), 'utf8');
  try {
    const paths = await createWorkspace(root, home, lesson, 'js');
    const initial = workspaceFingerprint(paths, 'js');
    await writeFile(paths.solution, 'export function twoSum() { return []; }\n');
    const reopened = await createWorkspace(root, home, lesson, 'js');
    assert.equal(reopened.created, false);
    assert.notEqual(workspaceFingerprint(reopened, 'js'), initial);
    await writeFile(paths.tests, 'process.exit(0);\n');
    await refreshTrustedTests(root, paths, lesson, 'js');
    const [result] = await runBatch([lessonTask(root, lesson, 'js', { paths })], { jobs: 1 });
    assert.equal(result.passed, false);
    assert.equal(result.exitCode, 1);
    assert.equal(await readFile(join(root, lesson.id, 'solution.js'), 'utf8'), original);
  } finally { await rm(home, { recursive: true, force: true }); }
});

test('search filters combine independently with discovered language availability', () => {
  const lessons = [
    { id: 'matching', title: 'Sorted range', topic: 'arrays', languages: ['py', 'rs'], difficulty: 'medium', patterns: ['binary-search'], prerequisites: ['basics'] },
    { id: 'wrong-language', title: 'Sorted range', topic: 'arrays', languages: ['rs'], difficulty: 'medium', patterns: ['binary-search'], prerequisites: [] },
    { id: 'wrong-difficulty', title: 'Sorted range', topic: 'arrays', languages: ['py'], difficulty: 'easy', patterns: ['binary-search'], prerequisites: [] },
    { id: 'wrong-topic', title: 'Sorted range', topic: 'trees', languages: ['py'], difficulty: 'medium', patterns: ['binary-search'], prerequisites: [] },
  ];
  const selected = filterLessons(lessons, { pattern: 'binary-search', difficulty: 'medium', language: 'py', topic: 'arrays' });
  assert.deepEqual(selected.map(row => row.id), ['matching']);
  assert.deepEqual(filterLessons(lessons, { query: 'range impossible' }), []);
  assert.deepEqual(filterLessons(lessons, { query: 'basics' }).map(row => row.id), ['matching']);
});

test('bounded execution reports later failures and successes instead of stopping at the first error', async () => {
  const results = await runBatch([
    { id: 'failure', command: 'node', args: ['-e', 'require("node:assert/strict").equal(2 + 2, 5)'], cwd: root },
    { id: 'success', command: 'node', args: ['-e', 'require("node:assert/strict").equal(2 + 2, 4)'], cwd: root },
  ], { jobs: 2 });
  assert.deepEqual(results.map(result => [result.id, result.passed]), [['failure', false], ['success', true]]);
});

test('an endless attempt ends at its timeout without blocking the next exercise', async () => {
  const results = await runBatch([
    { id: 'endless', command: 'node', args: ['-e', 'setInterval(() => {}, 1000)'], cwd: root },
    { id: 'finite', command: 'node', args: ['-e', 'require("node:assert/strict").equal(6 * 7, 42)'], cwd: root },
  ], { jobs: 1, timeoutMs: 1000 });
  assert.equal(results[0].passed, false);
  assert.equal(results[0].exitCode, null);
  assert.equal(results[1].passed, true);
});

test('interrupting execution stops active processes and does not start pending work', async () => {
  const home = await mkdtemp(join(tmpdir(), 'practice-interrupt-'));
  const marker = join(home, 'pending-ran');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 500);
  try {
    const results = await runBatch([
      { id: 'active', command: 'node', args: ['-e', 'setInterval(() => {}, 1000)'], cwd: root },
      { id: 'pending', command: 'node', args: ['-e', `require('node:fs').writeFileSync(${JSON.stringify(marker)}, 'unexpected')`], cwd: root },
    ], { jobs: 1, signal: controller.signal });
    assert.deepEqual(results.map(result => result.passed), [false, false]);
    assert.equal(results[0].signal, 'SIGTERM');
    await assert.rejects(readFile(marker), { code: 'ENOENT' });
  } finally {
    clearTimeout(timer);
    await rm(home, { recursive: true, force: true });
  }
});
