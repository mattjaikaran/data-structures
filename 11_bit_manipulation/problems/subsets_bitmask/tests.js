function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsetsFromMask } from '../../problems/subsets_bitmask/solution.js';



const subs = subsetsFromMask([1, 2, 3]);
assert(subs.length === 8, "subsets");
console.log('PASS 11_bit_manipulation/subsets_bitmask (js)');
