function assert(condition, message = 'Assertion failed') {
  if (!condition) throw new Error(message);
}
import { validPalindromeII } from './solution.js';
for (const text of ['', 'a', 'aba', 'abca', 'deeee', 'eeeed']) assert(validPalindromeII(text));
for (const text of ['abc', 'abcdef']) assert(!validPalindromeII(text));
console.log('PASS 03_strings/valid_palindrome_ii (js)');
