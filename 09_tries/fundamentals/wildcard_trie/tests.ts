function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { WildcardTrie } from '../../fundamentals/wildcard_trie/solution.ts';



const wt = new WildcardTrie();
["bad","dad","mad"].forEach(w => wt.insert(w));
assert(wt.search("bad")&&wt.search(".ad")&&wt.search("b.."),"wildcard match");
assert(!wt.search("pad")&&!wt.search("ba"),"wildcard no match");
console.log('PASS 09_tries/wildcard_trie (ts)');
