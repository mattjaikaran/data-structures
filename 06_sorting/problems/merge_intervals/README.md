# Merge intervals

Practice the matching question: [LeetCode #56: Merge Intervals](https://leetcode.com/problems/merge-intervals/).

Merge overlapping intervals after ordering them by start position.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/problems/merge_intervals js
npm run practice -- 06_sorting/problems/merge_intervals py
npm run practice -- 06_sorting/problems/merge_intervals ts
npm run practice -- 06_sorting/problems/merge_intervals rs
```

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
