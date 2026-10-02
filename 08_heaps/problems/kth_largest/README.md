# Kth largest

Practice the matching question: [LeetCode #215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/).

Return the kth largest input value.

Require nonempty input and an integer k from 1 through the input length.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/kth_largest py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/kth_largest py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `kthLargest` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `kth_largest` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `kthLargest` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `kth_largest` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(kthLargest([3, 2, 1, 5, 6, 4], 2) === 5, "kthLargest");
```

## Prerequisites

- [min heap](../../fundamentals/min_heap/README.md)

[Back to the topic](../../README.md)
