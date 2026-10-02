function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { reverseWords } from '../../problems/reverse_words/solution.js';



assert(reverseWords("  the sky is blue  ") === "blue is sky the", "reverseWords");
console.log('PASS 03_strings/reverse_words (js)');
