# Median finder

Practice the matching question: [LeetCode #295: Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/).

Maintain the median as values arrive in a stream.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/median_finder py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/median_finder py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `MedianFinder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `MedianFinder` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `MedianFinder` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `MedianFinder` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const mf = new MedianFinder();
[1, 2, 3].forEach((n) => mf.addNum(n));
assert(mf.findMedian() === 2, "median odd");
```

## Prerequisites

- [max heap](../../fundamentals/max_heap/README.md)
- [min heap](../../fundamentals/min_heap/README.md)

[Back to the topic](../../README.md)
