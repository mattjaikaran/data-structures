# Sliding window maximum

Practice the matching question: [LeetCode #239: Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/).

Return the maximum value in each contiguous window of size k.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/sliding_window_maximum js
npm run practice -- 05_stacks_queues/problems/sliding_window_maximum py
npm run practice -- 05_stacks_queues/problems/sliding_window_maximum ts
npm run practice -- 05_stacks_queues/problems/sliding_window_maximum rs
```

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
