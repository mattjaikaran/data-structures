function assert(condition: unknown, message = 'Assertion failed'): void {
  if (!condition) throw new Error(message);
}
import { validPalindromeII } from './solution.ts';
for (const text of ['', 'a', 'aba', 'abca', 'deeee', 'eeeed']) assert(validPalindromeII(text));
for (const text of ['abc', 'abcdef']) assert(!validPalindromeII(text));
console.log('PASS 03_strings/valid_palindrome_ii (ts)');
