function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { firstUniqChar } from '../../problems/first_unique_char/solution.js';



assert(firstUniqChar("leetcode") === 0, "firstUniq");
assert(firstUniqChar("aabb") === -1, "firstUniq2");
console.log('PASS 02_hash_maps/first_unique_char (js)');
