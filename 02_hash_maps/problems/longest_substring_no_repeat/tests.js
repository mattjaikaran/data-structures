function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { lengthOfLongestSubstring } from '../../problems/longest_substring_no_repeat/solution.js';



assert(lengthOfLongestSubstring("abcabcbb") === 3, "longestSub");
assert(lengthOfLongestSubstring("bbbbb") === 1, "longestSub2");
console.log('PASS 02_hash_maps/longest_substring_no_repeat (js)');
