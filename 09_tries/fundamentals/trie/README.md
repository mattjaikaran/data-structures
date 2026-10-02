# Trie

Implement word insertion, exact lookup, and prefix lookup in a prefix tree.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/fundamentals/trie py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/fundamentals/trie py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
