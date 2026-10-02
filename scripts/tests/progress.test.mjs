import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { noteAttempt, recordReview, reviewQueue, updateProgress } from '../progress.mjs';

function attempt(data, passed = true, fingerprint = 'current') {
  noteAttempt(data, { lesson: 'arrays/two_sum', language: 'py', passed, durationMs: 20,
    fingerprint, reference: 'reference-version' });
}
function review(data, options = {}) {
  return recordReview(data, { lesson: 'arrays/two_sum', language: 'py', outcome: 'solved',
    fingerprint: 'current', reference: 'reference-version', today: '2026-01-31', ...options });
}

test('independent solves advance intervals and hints reset them', () => {
  const data = { version: 1, records: {} };
  attempt(data);
  assert.equal(review(data).due, '2026-02-01');
  attempt(data);
  assert.equal(review(data, { today: '2026-02-01' }).due, '2026-02-04');
  attempt(data);
  const hinted = review(data, { hints: 2, minutes: 10, today: '2026-02-04' });
  assert.equal(hinted.due, '2026-02-05');
  assert.equal(hinted.independentSolves, 2);
  assert.equal(hinted.hintedSolves, 1);
  assert.equal(hinted.hintsUsed, 2);
  attempt(data);
  assert.equal(review(data, { today: '2026-02-05' }).due, '2026-02-06');
});

test('failed and changed attempts cannot reuse passing evidence or inflate reviews', () => {
  const data = { version: 1, records: {} };
  attempt(data);
  assert.throws(() => review(data, { fingerprint: 'edited-after-run' }));
  assert.throws(() => review(data, { reference: 'updated-tests' }));
  review(data);
  assert.throws(() => review(data));
  attempt(data, false);
  assert.throws(() => review(data));
  const failed = review(data, { outcome: 'failed', today: '2026-02-01' });
  assert.equal(failed.independentSolves, 1);
  assert.equal(failed.stage, -1);
  assert.equal(failed.due, '2026-02-02');
});

test('review queue includes the due UTC date and keeps languages separate', () => {
  const data = { version: 1, records: {} };
  attempt(data);
  review(data, { today: '2024-02-28' });
  assert.deepEqual(reviewQueue(data, { today: '2024-02-28' }), []);
  assert.equal(reviewQueue(data, { today: '2024-02-29', language: 'py' }).length, 1);
  assert.deepEqual(reviewQueue(data, { today: '2024-02-29', language: 'rs' }), []);
  attempt(data);
  assert.throws(() => review(data, { hints: -1 }));
  assert.throws(() => review(data, { today: '2024-02-30' }));
});

test('concurrent progress writes never lose a successful attempt', async () => {
  const home = await mkdtemp(join(tmpdir(), 'practice-progress-'));
  try {
    const writes = await Promise.allSettled(Array.from({ length: 3 }, () =>
      updateProgress(home, data => attempt(data))));
    const successful = writes.filter(result => result.status === 'fulfilled').length;
    assert.ok(successful > 0);
    const saved = JSON.parse(await readFile(join(home, 'progress.json'), 'utf8'));
    assert.equal(saved.records['arrays/two_sum:py'].attempts, successful);
  } finally { await rm(home, { recursive: true, force: true }); }
});
