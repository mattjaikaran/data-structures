function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { largestRectangleHistogram } from '../../problems/largest_rectangle_histogram/solution.ts';



assert(largestRectangleHistogram([2,1,5,6,2,3]) === 10, "histogram");
assert(largestRectangleHistogram([2,4]) === 4, "histogram 2");
console.log('PASS 05_stacks_queues/largest_rectangle_histogram (ts)');
