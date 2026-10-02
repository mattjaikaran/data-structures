# Word search ii

Practice the matching question: [LeetCode #212: Word Search II](https://leetcode.com/problems/word-search-ii/).

Find dictionary words by moving through adjacent grid cells without reusing a cell within a word.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/problems/word_search_ii js
npm run practice -- 09_tries/problems/word_search_ii py
npm run practice -- 09_tries/problems/word_search_ii ts
```

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
