function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subarraySumEqualsK } from '../../problems/subarray_sum_k/solution.js';



assert(subarraySumEqualsK([1, 1, 1], 2) === 2, "subarraySum");
assert(subarraySumEqualsK([1, 2, 3], 3) === 2, "subarraySum2");
console.log('PASS 02_hash_maps/subarray_sum_k (js)');
