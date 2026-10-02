function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { palindromePartitioning } from '../../problems/palindrome_partitioning/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const pp = palindromePartitioning("aab");
assert(pp.some(p => eq(p,["a","a","b"])) && pp.some(p => eq(p,["aa","b"])), "palindromePartitioning");
console.log('PASS 13_backtracking/palindrome_partitioning (js)');
