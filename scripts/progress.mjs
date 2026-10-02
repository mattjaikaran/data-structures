import { existsSync, readFileSync } from 'node:fs';
import { mkdir, open, rename, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const intervals = [1, 3, 7, 14, 30, 60, 120];
export const todayUtc = () => new Date().toISOString().slice(0, 10);
const keyFor = (lesson, language) => `${lesson}:${language}`;

export function readProgress(home) {
  const path = join(home, 'progress.json');
  if (!existsSync(path)) return { version: 1, records: {} };
  const data = JSON.parse(readFileSync(path, 'utf8'));
  if (data.version !== 1 || !data.records || Array.isArray(data.records) || typeof data.records !== 'object') {
    throw new Error('Unsupported progress file. Preserve it before changing its schema.');
  }
  return data;
}

export async function updateProgress(home, update) {
  await mkdir(home, { recursive: true, mode: 0o700 });
  const lock = join(home, 'progress.lock');
  let handle;
  try { handle = await open(lock, 'wx', 0o600); }
  catch (error) {
    if (error.code === 'EEXIST') throw new Error('Progress is locked by another command. Retry after it finishes; remove a stale lock only after checking that command.');
    throw error;
  }
  const temporary = join(home, `progress.${process.pid}.tmp`);
  try {
    const data = readProgress(home);
    const result = update(data);
    await writeFile(temporary, JSON.stringify(data, null, 2) + '\n', { mode: 0o600 });
    await rename(temporary, join(home, 'progress.json'));
    return result;
  } finally {
    await handle.close();
    await unlink(temporary).catch(error => { if (error.code !== 'ENOENT') throw error; });
    await unlink(lock);
  }
}

function getRecord(data, lesson, language) {
  const key = keyFor(lesson, language);
  data.records[key] ??= { lesson, language, attempts: 0, independentSolves: 0,
    hintedSolves: 0, hintsUsed: 0, minutes: 0, stage: -1, due: null, lastRun: null, history: [] };
  return data.records[key];
}

export function noteAttempt(data, { lesson, language, passed, durationMs, fingerprint, reference }) {
  const record = getRecord(data, lesson, language);
  record.attempts++;
  record.lastRun = { passed, durationMs, fingerprint, reference, at: new Date().toISOString() };
  return record;
}

export function recordReview(data, { lesson, language, outcome, hints = 0, minutes = 0,
  fingerprint, reference, today = todayUtc() }) {
  if (!['solved', 'partial', 'failed'].includes(outcome) || !Number.isInteger(hints) || hints < 0 ||
      !Number.isFinite(minutes) || minutes < 0) throw new Error('Use solved, partial, or failed; nonnegative integer hints; and nonnegative minutes');
  const date = new Date(`${today}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(today) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== today) {
    throw new Error('Invalid review date');
  }
  const record = getRecord(data, lesson, language);
  if (outcome === 'solved' && (!record.lastRun?.passed || record.lastRun.fingerprint !== fingerprint || record.lastRun.reference !== reference)) {
    throw new Error('Run the current private attempt successfully before recording a solve. Reference runs and stale passes do not count.');
  }
  if (record.history.at(-1)?.attempt === record.attempts) throw new Error('This attempt already has a review. Run another attempt before recording it again.');
  const independent = outcome === 'solved' && hints === 0;
  record.stage = independent ? Math.min(record.stage + 1, intervals.length - 1) : -1;
  const delay = independent ? intervals[record.stage] : 1;
  const due = new Date(`${today}T00:00:00Z`);
  due.setUTCDate(due.getUTCDate() + delay);
  record.due = due.toISOString().slice(0, 10);
  if (independent) record.independentSolves++;
  else if (outcome === 'solved') record.hintedSolves++;
  record.hintsUsed += hints;
  record.minutes += minutes;
  record.history.push({ date: today, outcome, hints, minutes, attempt: record.attempts });
  record.history = record.history.slice(-20);
  return record;
}

export function reviewQueue(data, { today = todayUtc(), language } = {}) {
  return Object.values(data.records).filter(record => record.due && record.due <= today && (!language || record.language === language))
    .sort((a, b) => a.due.localeCompare(b.due) || a.lesson.localeCompare(b.lesson) || a.language.localeCompare(b.language));
}
