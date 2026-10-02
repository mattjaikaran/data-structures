function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { minWindowSubstring } from '../../problems/min_window_substring/solution.js';



assert(minWindowSubstring("ADOBECODEBANC", "ABC") === "BANC", "minWindow");
assert(minWindowSubstring("a", "a") === "a", "minWindow2");
assert(minWindowSubstring("a", "b") === "", "minWindow3");
console.log('PASS 02_hash_maps/min_window_substring (js)');
