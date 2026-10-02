function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { kmpSearch } from '../../fundamentals/kmp_search/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(kmpSearch("abcabcabc","abc"),[0,3,6]),"kmp basic");
assert(eq(kmpSearch("hello","ll"),[2]),"kmp single");
console.log('PASS 03_strings/kmp_search (ts)');
