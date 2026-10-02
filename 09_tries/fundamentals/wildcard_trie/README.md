# Wildcard trie

Support word lookup where a dot matches one character.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/fundamentals/wildcard_trie py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/fundamentals/wildcard_trie py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
