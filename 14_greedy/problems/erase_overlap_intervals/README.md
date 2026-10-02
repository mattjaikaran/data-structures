# Erase overlap intervals

Practice the matching question: [LeetCode #435: Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/).

Remove the smallest number of intervals so the remaining intervals do not overlap.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/erase_overlap_intervals py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/erase_overlap_intervals py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `eraseOverlapIntervals` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `erase_overlap_intervals` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `eraseOverlapIntervals` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `erase_overlap_intervals` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) === 1, "eraseOverlap");
```

[Back to the topic](../../README.md)
