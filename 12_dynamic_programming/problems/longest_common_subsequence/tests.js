function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestCommonSubsequence } from '../../problems/longest_common_subsequence/solution.js';



assert(longestCommonSubsequence("abcde","ace")===3&&longestCommonSubsequence("abc","def")===0,"lcs");
console.log('PASS 12_dynamic_programming/longest_common_subsequence (js)');
