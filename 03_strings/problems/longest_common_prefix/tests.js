function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestCommonPrefix } from '../../problems/longest_common_prefix/solution.js';



assert(longestCommonPrefix(["flower", "flow", "flight"]) === "fl", "lcp");
assert(longestCommonPrefix(["dog", "racecar", "car"]) === "", "lcp empty");
console.log('PASS 03_strings/longest_common_prefix (js)');
