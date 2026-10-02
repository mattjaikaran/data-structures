# Min path sum

Practice the matching question: [LeetCode #64: Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/).

Find the smallest sum on a grid path that moves only right or down.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/min_path_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/min_path_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `minPathSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `min_path_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `minPathSum` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(minPathSum([[1,3,1],[1,5,1],[4,2,1]])===7,"minPath");
```

[Back to the topic](../../README.md)
