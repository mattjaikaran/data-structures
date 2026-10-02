# Erase overlap intervals

Practice the matching question: [LeetCode #435: Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/).

Remove the smallest number of intervals so the remaining intervals do not overlap.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/erase_overlap_intervals js
npm run practice -- 14_greedy/problems/erase_overlap_intervals py
npm run practice -- 14_greedy/problems/erase_overlap_intervals ts
npm run practice -- 14_greedy/problems/erase_overlap_intervals rs
```

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
