function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { mergeIntervals } from '../../problems/merge_intervals/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

assert(eq(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]),[[1,6],[8,10],[15,18]]),"mergeInt");
console.log('PASS 06_sorting/merge_intervals (ts)');
