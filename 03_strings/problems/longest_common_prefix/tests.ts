function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestCommonPrefix } from '../../problems/longest_common_prefix/solution.ts';



assert(longestCommonPrefix(["flower","flow","flight"])==="fl","lcp");
assert(longestCommonPrefix(["dog","racecar","car"])==="","lcp empty");
console.log('PASS 03_strings/longest_common_prefix (ts)');
