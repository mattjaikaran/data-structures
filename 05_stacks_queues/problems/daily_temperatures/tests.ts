function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { dailyTemperatures } from '../../problems/daily_temperatures/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(dailyTemperatures([73,74,75,71,69,72,76,73]), [1,1,4,2,1,1,0,0]), "daily temps");
console.log('PASS 05_stacks_queues/daily_temperatures (ts)');
