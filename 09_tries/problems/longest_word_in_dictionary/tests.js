function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestWordInDictionary } from '../../problems/longest_word_in_dictionary/solution.js';



assert(longestWordInDictionary(["w", "wo", "wor", "worl", "world"]) === "world", "longest");
console.log('PASS 09_tries/longest_word_in_dictionary (js)');
