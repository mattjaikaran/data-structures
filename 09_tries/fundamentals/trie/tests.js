function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Trie } from '../../fundamentals/trie/solution.js';



const t = new Trie();
["apple", "app", "application", "apply"].forEach((w) => t.insert(w));
assert(t.search("apple") && t.search("app"), "search found");
assert(!t.search("ap") && !t.search("apples"), "search not found");
assert(t.startsWith("app") && !t.startsWith("xyz"), "startsWith");
const autocompleteResult = t.autocomplete("app");
assert(
    JSON.stringify(autocompleteResult.sort()) === JSON.stringify(["app", "apple", "application", "apply"].sort()),
    "autocomplete"
  );
t.delete("app");
assert(!t.search("app") && t.search("apple"), "delete");
console.log('PASS 09_tries/trie (js)');
