# Replace words

Practice the matching question: [LeetCode #648: Replace Words](https://leetcode.com/problems/replace-words/).

Replace each word with the shortest matching root in a dictionary.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/problems/replace_words py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/problems/replace_words py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
