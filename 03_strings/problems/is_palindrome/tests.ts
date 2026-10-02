function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isPalindrome } from '../../problems/is_palindrome/solution.ts';



assert(isPalindrome("A man, a plan, a canal: Panama"),"palindrome true");
assert(!isPalindrome("race a car"),"palindrome false");
console.log('PASS 03_strings/is_palindrome (ts)');
