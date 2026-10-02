# Word search

Practice the matching question: [LeetCode #79: Word Search](https://leetcode.com/problems/word-search/).

Determine whether a word can follow adjacent grid cells without reusing a cell.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/word_search js
npm run practice -- 13_backtracking/problems/word_search py
npm run practice -- 13_backtracking/problems/word_search ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `wordSearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `word_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `wordSearch` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
assert(wordSearch(grid.map(r=>[...r]), "ABCCED"), "wordSearch found");
```

[Back to the topic](../../README.md)
