# Replace words

Practice the matching question: [LeetCode #648: Replace Words](https://leetcode.com/problems/replace-words/).

Replace each word with the shortest matching root in a dictionary.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/problems/replace_words js
npm run practice -- 09_tries/problems/replace_words py
npm run practice -- 09_tries/problems/replace_words ts
npm run practice -- 09_tries/problems/replace_words rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `replaceWords` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `replace_words` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `replaceWords` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `replace_words` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery") === "the cat was rat by the bat",
    "replaceWords"
  );
```

## Prerequisites

- [trie](../../fundamentals/trie/README.md)

[Back to the topic](../../README.md)
