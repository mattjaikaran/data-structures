# Merge intervals

Practice the matching question: [LeetCode #56: Merge Intervals](https://leetcode.com/problems/merge-intervals/).

Merge overlapping intervals after ordering them by start position.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/problems/merge_intervals py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/problems/merge_intervals py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeIntervals` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_intervals_sorted` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeIntervals` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_intervals` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]), [
      [1, 6],
      [8, 10],
      [15, 18],
    ]),
    "mergeInt"
  );
```

[Back to the topic](../../README.md)
