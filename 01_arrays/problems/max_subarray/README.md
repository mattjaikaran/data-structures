# Max subarray

Practice the matching question: [LeetCode #53: Maximum Subarray](https://leetcode.com/problems/maximum-subarray/).

Return the largest sum of a nonempty contiguous subarray.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/max_subarray py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/max_subarray py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `maxSubarray` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `max_subarray` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `maxSubarray` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `max_subarray` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "kadane classic");
```

## Solution notes

Kadane's Algorithm — largest contiguous subarray sum.
Time: O(n)  Space: O(1)

DECISION at each step: is it better to start fresh or extend?
    current = max(num, current + num)

[Back to the topic](../../README.md)
