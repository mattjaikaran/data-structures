# Word ladder

Practice the matching question: [LeetCode #127: Word Ladder](https://leetcode.com/problems/word-ladder/).

Return the length of a shortest word transformation chain that changes one character at a time.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/word_ladder py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/word_ladder py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `wordLadder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `word_ladder` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `wordLadder` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5, "wordLadder");
```

[Back to the topic](../../README.md)
