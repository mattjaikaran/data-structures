import { spawn } from 'node:child_process';
import { performance } from 'node:perf_hooks';

const outputLimit = 4 * 1024 * 1024;

export function runTask(task, timeoutMs = 30000, signal) {
  return new Promise(resolve => {
    if (signal?.aborted) {
      resolve({ id: task.id, passed: false, exitCode: null, signal: null,
        durationMs: 0, stdout: '', stderr: '', error: 'Run interrupted before execution' });
      return;
    }
    const started = performance.now();
    let stdout = '', stderr = '', bytes = 0, reason = null, finished = false;
    const child = spawn(task.command, task.args, {
      cwd: task.cwd, env: { ...process.env, ...task.env }, stdio: ['ignore', 'pipe', 'pipe'],
      detached: process.platform !== 'win32', shell: false,
    });
    let killTimer;
    function terminate(message) {
      if (reason) return;
      reason = message;
      const kill = signal => {
        try {
          if (process.platform !== 'win32' && child.pid) process.kill(-child.pid, signal);
          else child.kill(signal);
        } catch (error) { if (error.code !== 'ESRCH') stderr += `${error.message}\n`; }
      };
      kill('SIGTERM');
      killTimer = setTimeout(() => kill('SIGKILL'), 1000);
      killTimer.unref();
    }
    const timer = setTimeout(() => terminate(`Timed out after ${timeoutMs} ms`), timeoutMs);
    const abort = () => terminate('Run interrupted');
    signal?.addEventListener('abort', abort, { once: true });
    function collect(chunk, stream) {
      bytes += chunk.length;
      if (bytes > outputLimit) { terminate('Process output exceeded 4 MiB'); return; }
      if (stream === 'stdout') stdout += chunk.toString();
      else stderr += chunk.toString();
    }
    child.stdout.on('data', chunk => collect(chunk, 'stdout'));
    child.stderr.on('data', chunk => collect(chunk, 'stderr'));
    function finish(code, exitSignal, error) {
      if (finished) return;
      finished = true;
      if (reason && child.pid && process.platform !== 'win32') {
        try { process.kill(-child.pid, 'SIGKILL'); }
        catch (error) { if (error.code !== 'ESRCH') stderr += `${error.message}\n`; }
      }
      clearTimeout(timer); clearTimeout(killTimer);
      signal?.removeEventListener('abort', abort);
      if (error) reason = error.message;
      if (!reason && task.requireRustTests && !/test result: ok\.\s+[1-9]\d* passed/.test(stdout)) {
        reason = 'No selected Rust tests passed';
      }
      resolve({ id: task.id, passed: code === 0 && !reason, exitCode: code, signal: exitSignal,
        durationMs: Math.round(performance.now() - started), stdout, stderr, error: reason });
    }
    child.on('error', error => finish(null, null, error));
    child.on('close', (code, signal) => finish(code, signal));
  });
}

export async function runBatch(tasks, { jobs = 4, timeoutMs = 30000, signal } = {}) {
  if (!Number.isInteger(jobs) || jobs < 1 || jobs > 16) throw new Error('Jobs must be an integer from 1 to 16');
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1) throw new Error('Timeout must be a positive integer');
  const results = new Array(tasks.length);
  let next = 0;
  async function worker() {
    while (next < tasks.length) {
      const index = next++;
      results[index] = await runTask(tasks[index], timeoutMs, signal);
    }
  }
  await Promise.all(Array.from({ length: Math.min(jobs, tasks.length) }, worker));
  return results;
}

export function printResults(results, { json = false } = {}) {
  if (json) {
    console.log(JSON.stringify({ passed: results.every(result => result.passed), results }, null, 2));
    return;
  }
  for (const result of results) {
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.error) console.error(`${result.id}: ${result.error}`);
    console.log(`${result.passed ? 'PASS' : 'FAIL'} ${result.id} (${result.durationMs} ms)`);
  }
  console.log(`Passed ${results.filter(result => result.passed).length}/${results.length} test processes.`);
}
