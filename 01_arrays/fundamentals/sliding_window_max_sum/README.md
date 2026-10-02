# Sliding window max sum

Return the largest sum of a contiguous window of k elements. Use a positive k no larger than the input length.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/fundamentals/sliding_window_max_sum js
npm run practice -- 01_arrays/fundamentals/sliding_window_max_sum py
npm run practice -- 01_arrays/fundamentals/sliding_window_max_sum ts
npm run practice -- 01_arrays/fundamentals/sliding_window_max_sum rs
```

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
