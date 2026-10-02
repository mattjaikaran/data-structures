function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordPattern } from '../../problems/word_pattern/solution.js';



assert(wordPattern("abba", "dog cat cat dog"), "wordPat");
assert(!wordPattern("abba", "dog cat cat fish"), "wordPat2");
console.log('PASS 02_hash_maps/word_pattern (js)');
