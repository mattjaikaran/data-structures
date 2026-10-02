function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxSubarray } from '../../problems/max_subarray/solution.js';



assert(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "kadane classic");
assert(maxSubarray([-1, -2, -3]) === -1, "kadane all negative");
assert(maxSubarray([1]) === 1, "kadane single");
console.log('PASS 01_arrays/max_subarray (js)');
