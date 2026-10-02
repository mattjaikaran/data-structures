function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { zSearch } from '../../fundamentals/z_search/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(zSearch("abcabcabc", "abc"), [0, 3, 6]), "z-search");
console.log('PASS 03_strings/z_search (js)');
