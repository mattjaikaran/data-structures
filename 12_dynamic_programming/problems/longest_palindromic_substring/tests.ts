function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestPalindromicSubstring } from '../../problems/longest_palindromic_substring/solution.ts';



assert(["bab","aba"].includes(longestPalindromicSubstring("babad"))&&longestPalindromicSubstring("cbbd")==="bb","palindrome");
console.log('PASS 12_dynamic_programming/longest_palindromic_substring (ts)');
