# Subarray sum k

Practice the matching question: [LeetCode #560: Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/).

Count contiguous subarrays whose sum equals k, including overlapping subarrays and negative values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/subarray_sum_k js
npm run practice -- 02_hash_maps/problems/subarray_sum_k py
npm run practice -- 02_hash_maps/problems/subarray_sum_k ts
npm run practice -- 02_hash_maps/problems/subarray_sum_k rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `subarraySumEqualsK` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `subarray_sum_equals_k` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `subarraySumEqualsK` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `subarray_sum_k` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(subarraySumEqualsK([1, 1, 1], 2) === 2, "subarraySum");
```

[Back to the topic](../../README.md)
