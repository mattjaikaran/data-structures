# Word search ii

Practice the matching question: [LeetCode #212: Word Search II](https://leetcode.com/problems/word-search-ii/).

Find dictionary words by moving through adjacent grid cells without reusing a cell within a word.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/problems/word_search_ii py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/problems/word_search_ii py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `wordSearchII` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `word_search_ii` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `wordSearchII` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
const found = new Set(wordSearchII(board, ["oath", "pea", "eat", "rain"]));
assert(found.has("oath") && found.has("eat"), "wordSearch");
```

## Prerequisites

- [trie](../../fundamentals/trie/README.md)

[Back to the topic](../../README.md)
