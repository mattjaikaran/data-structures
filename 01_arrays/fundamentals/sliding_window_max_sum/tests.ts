function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { slidingWindowMaxSum } from '../../fundamentals/sliding_window_max_sum/solution.ts';



assert(slidingWindowMaxSum([2, 1, 5, 1, 3, 2], 3) === 9, "sliding window");
console.log('PASS 01_arrays/sliding_window_max_sum (ts)');
