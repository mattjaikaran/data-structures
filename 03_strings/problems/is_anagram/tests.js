function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isAnagram } from '../../problems/is_anagram/solution.js';



assert(isAnagram("anagram", "nagaram") && !isAnagram("rat", "car"), "anagram");
console.log('PASS 03_strings/is_anagram (js)');
