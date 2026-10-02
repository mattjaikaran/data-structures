# Largest rectangle histogram

Practice the matching question: [LeetCode #84: Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/).

Return the largest rectangular area under adjacent histogram bars of width one.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/largest_rectangle_histogram js
npm run practice -- 01_arrays/problems/largest_rectangle_histogram py
npm run practice -- 01_arrays/problems/largest_rectangle_histogram ts
npm run practice -- 01_arrays/problems/largest_rectangle_histogram rs
```

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
