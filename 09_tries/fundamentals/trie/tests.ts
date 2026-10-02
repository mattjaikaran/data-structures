function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Trie } from '../../fundamentals/trie/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

const t = new Trie();
["apple","app","application","apply"].forEach(w => t.insert(w));
assert(t.search("apple")&&t.search("app"),"search found");
assert(!t.search("ap")&&!t.search("apples"),"search not found");
assert(t.startsWith("app")&&!t.startsWith("xyz"),"startsWith");
assert(eq(t.autocomplete("app"),["app","apple","application","apply"]),"autocomplete");
t.delete("app");
assert(!t.search("app")&&t.search("apple"),"delete");
console.log('PASS 09_tries/trie (ts)');
