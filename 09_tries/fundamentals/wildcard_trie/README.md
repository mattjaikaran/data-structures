# Wildcard trie

Support word lookup where a dot matches one character.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/fundamentals/wildcard_trie js
npm run practice -- 09_tries/fundamentals/wildcard_trie py
npm run practice -- 09_tries/fundamentals/wildcard_trie ts
npm run practice -- 09_tries/fundamentals/wildcard_trie rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `WildcardTrie` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `WildcardTrie` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `WildcardTrie` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `WildcardTrie` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const wt = new WildcardTrie();
["bad", "dad", "mad"].forEach((w) => wt.insert(w));
assert(wt.search("bad") && wt.search(".ad") && wt.search("b.."), "wildcard match");
```

## Prerequisites

- [trie](../../fundamentals/trie/README.md)

[Back to the topic](../../README.md)
