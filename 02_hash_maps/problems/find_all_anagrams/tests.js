function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findAllAnagrams } from '../../problems/find_all_anagrams/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(findAllAnagrams("cbaebabacd", "abc"), [0, 6]), "anagrams");
assert(eq(findAllAnagrams("abab", "ab"), [0, 1, 2]), "anagrams2");
console.log('PASS 02_hash_maps/find_all_anagrams (js)');
