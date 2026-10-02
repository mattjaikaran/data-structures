# Trie

Implement word insertion, exact lookup, and prefix lookup in a prefix tree.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/fundamentals/trie js
npm run practice -- 09_tries/fundamentals/trie py
npm run practice -- 09_tries/fundamentals/trie ts
npm run practice -- 09_tries/fundamentals/trie rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `TrieNode`, `Trie` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `TrieNode`, `Trie` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `TrieNode`, `Trie` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `TrieNode`, `Trie` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const t = new Trie();
["apple", "app", "application", "apply"].forEach((w) => t.insert(w));
assert(t.search("apple") && t.search("app"), "search found");
```

[Back to the topic](../../README.md)
