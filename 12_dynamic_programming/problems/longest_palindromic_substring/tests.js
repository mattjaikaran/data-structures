function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestPalindromicSubstring } from '../../problems/longest_palindromic_substring/solution.js';



assert(["bab","aba"].includes(longestPalindromicSubstring("babad"))&&longestPalindromicSubstring("cbbd")==="bb","palindrome");
console.log('PASS 12_dynamic_programming/longest_palindromic_substring (js)');
