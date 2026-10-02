function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { buildPrefixSum } from '../../fundamentals/prefix_sum/solution.js';



const p = buildPrefixSum([1, 2, 3, 4, 5]);
assert(p[4] - p[1] === 9, "prefix range sum [1..3]");
assert(p[5] === 15, "prefix total");
console.log('PASS 01_arrays/prefix_sum (js)');
