function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numDistinct } from '../../problems/num_distinct/solution.js';



assert(numDistinct("rabbbit", "rabbit") === 3, "numDistinct");
assert(numDistinct("babgbag", "bag") === 5, "numDistinct2");
console.log('PASS 03_strings/num_distinct (js)');
