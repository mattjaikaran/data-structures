# Max subarray

Practice the matching question: [LeetCode #53: Maximum Subarray](https://leetcode.com/problems/maximum-subarray/).

Return the largest sum of a nonempty contiguous subarray.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/max_subarray js
npm run practice -- 01_arrays/problems/max_subarray py
npm run practice -- 01_arrays/problems/max_subarray ts
npm run practice -- 01_arrays/problems/max_subarray rs
```

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
