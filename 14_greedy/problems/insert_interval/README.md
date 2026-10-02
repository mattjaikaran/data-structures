# Insert interval

Practice the matching question: [LeetCode #57: Insert Interval](https://leetcode.com/problems/insert-interval/).

Insert an interval into sorted disjoint intervals and merge overlaps.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/insert_interval py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/insert_interval py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `insertInterval` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `insert_interval` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `insertInterval` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(insertInterval([[1,3],[6,9]],[2,5]),[[1,5],[6,9]]), "insertInterval");
```

[Back to the topic](../../README.md)
