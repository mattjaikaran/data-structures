# Largest rectangle histogram

Practice the matching question: [LeetCode #84: Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/).

Return the largest rectangular area under adjacent histogram bars of width one.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/largest_rectangle_histogram py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/largest_rectangle_histogram py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `largestRectangleHistogram` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `largest_rectangle_histogram` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `largestRectangleHistogram` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `largest_rectangle_histogram` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(largestRectangleHistogram([2, 1, 5, 6, 2, 3]) === 10, "histogram classic");
```

## Solution notes

Largest Rectangle in Histogram (LC #84)
Time: O(n)  Space: O(n)

Pattern: Monotonic increasing stack storing (start_index, height) pairs.
When a shorter bar arrives, pop taller bars and compute their max width.
The 'start' tracks how far LEFT the current bar can extend.
Sentinel 0 at end forces the stack to fully flush.

[Back to the topic](../../README.md)
