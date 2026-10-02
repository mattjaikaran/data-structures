# Sliding window maximum

Practice the matching question: [LeetCode #239: Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/).

Return the maximum value in each contiguous window of size k.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/sliding_window_maximum py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/sliding_window_maximum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `slidingWindowMaximum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `sliding_window_maximum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `slidingWindowMaximum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `sliding_window_maximum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    deepEq(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]),
    "sw max"
  );
```

## Solution notes

Sliding Window Maximum (LC #239) — monotonic deque. O(n).

[Back to the topic](../../README.md)
