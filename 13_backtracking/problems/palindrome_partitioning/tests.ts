function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { palindromePartitioning } from '../../problems/palindrome_partitioning/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

const pp = palindromePartitioning("aab");
assert(pp.some(p => eq(p,["a","a","b"])) && pp.some(p => eq(p,["aa","b"])), "palindromePartitioning");
console.log('PASS 13_backtracking/palindrome_partitioning (ts)');
