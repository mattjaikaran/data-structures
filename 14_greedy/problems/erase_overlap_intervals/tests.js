function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { eraseOverlapIntervals } from '../../problems/erase_overlap_intervals/solution.js';



assert(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) === 1, "eraseOverlap");
console.log('PASS 14_greedy/erase_overlap_intervals (js)');
