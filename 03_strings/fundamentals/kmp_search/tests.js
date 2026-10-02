function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { kmpSearch } from '../../fundamentals/kmp_search/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(kmpSearch("abcabcabc", "abc"), [0, 3, 6]), "kmp basic");
assert(eq(kmpSearch("hello", "ll"), [2]), "kmp single");
console.log('PASS 03_strings/kmp_search (js)');
