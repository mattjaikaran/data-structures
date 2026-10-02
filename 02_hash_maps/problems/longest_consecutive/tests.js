function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestConsecutive } from '../../problems/longest_consecutive/solution.js';



assert(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4, "longCons");
assert(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9, "longCons2");
console.log('PASS 02_hash_maps/longest_consecutive (js)');
