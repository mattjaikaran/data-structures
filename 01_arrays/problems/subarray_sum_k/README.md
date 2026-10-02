# Subarray sum k

Practice the matching question: [LeetCode #560: Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/).

Count contiguous subarrays whose sum equals k, including overlapping subarrays and negative values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/subarray_sum_k js
npm run practice -- 01_arrays/problems/subarray_sum_k py
npm run practice -- 01_arrays/problems/subarray_sum_k ts
npm run practice -- 01_arrays/problems/subarray_sum_k rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `subarraySumK` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `subarray_sum_k` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `subarraySumK` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `subarray_sum_k` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(subarraySumK([1, 1, 1], 2) === 2, "subarray sum k");
```

## Solution notes

Subarray Sum Equals K (LC #560)
Count subarrays summing exactly to k.
Time: O(n)  Space: O(n)

Pattern: Prefix sum + hash map.
  If prefix[j] - prefix[i] = k, then subarray [i+1..j] sums to k.
  Count how many previous prefixes equal (current_prefix - k).

[Back to the topic](../../README.md)
