function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { eraseOverlapIntervals } from '../../problems/erase_overlap_intervals/solution.ts';



assert(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) === 1, "eraseOverlap");
console.log('PASS 14_greedy/erase_overlap_intervals (ts)');
