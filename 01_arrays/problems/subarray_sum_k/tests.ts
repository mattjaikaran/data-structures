function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subarraySumK } from '../../problems/subarray_sum_k/solution.ts';



assert(subarraySumK([1, 1, 1], 2) === 2, "subarray sum k");
assert(subarraySumK([1, 2, 3], 3) === 2, "subarray sum k overlapping");
assert(subarraySumK([-1, -1, 1], 0) === 1, "subarray sum k negative");
console.log('PASS 01_arrays/subarray_sum_k (ts)');
