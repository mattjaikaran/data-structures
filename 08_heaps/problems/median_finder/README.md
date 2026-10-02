# Median finder

Practice the matching question: [LeetCode #295: Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/).

Maintain the median as values arrive in a stream.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/median_finder js
npm run practice -- 08_heaps/problems/median_finder py
npm run practice -- 08_heaps/problems/median_finder ts
npm run practice -- 08_heaps/problems/median_finder rs
```

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
