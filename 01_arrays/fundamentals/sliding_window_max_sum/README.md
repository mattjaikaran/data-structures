# Sliding window max sum

Return the largest sum of a contiguous window of k elements. Use a positive k no larger than the input length.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/fundamentals/sliding_window_max_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/fundamentals/sliding_window_max_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `slidingWindowMaxSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `sliding_window_max_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `slidingWindowMaxSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `sliding_window_max_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(slidingWindowMaxSum([2, 1, 5, 1, 3, 2], 3) === 9, "sliding window");
```

## Solution notes

Maximum sum of any contiguous subarray of size k.
Time: O(n)  Space: O(1)

TRICK: instead of re-summing each window, add the new element
and drop the one that slid out: O(n) not O(n*k).

[Back to the topic](../../README.md)
