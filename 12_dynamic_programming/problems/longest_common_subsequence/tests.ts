function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestCommonSubsequence } from '../../problems/longest_common_subsequence/solution.ts';



assert(longestCommonSubsequence("abcde","ace")===3&&longestCommonSubsequence("abc","def")===0,"lcs");
console.log('PASS 12_dynamic_programming/longest_common_subsequence (ts)');
