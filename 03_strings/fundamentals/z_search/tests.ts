function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { zSearch } from '../../fundamentals/z_search/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(zSearch("abcabcabc","abc"),[0,3,6]),"z-search");
console.log('PASS 03_strings/z_search (ts)');
