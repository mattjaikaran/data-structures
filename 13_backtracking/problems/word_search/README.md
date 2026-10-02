# Word search

Practice the matching question: [LeetCode #79: Word Search](https://leetcode.com/problems/word-search/).

Determine whether a word can follow adjacent grid cells without reusing a cell.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/word_search py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/word_search py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
