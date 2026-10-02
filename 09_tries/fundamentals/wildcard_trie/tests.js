function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { WildcardTrie } from '../../fundamentals/wildcard_trie/solution.js';



const wt = new WildcardTrie();
["bad", "dad", "mad"].forEach((w) => wt.insert(w));
assert(wt.search("bad") && wt.search(".ad") && wt.search("b.."), "wildcard match");
assert(!wt.search("pad") && !wt.search("ba"), "wildcard no match");
console.log('PASS 09_tries/wildcard_trie (js)');
