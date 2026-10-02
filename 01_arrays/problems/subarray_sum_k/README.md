# Subarray sum k

Practice the matching question: [LeetCode #560: Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/).

Count contiguous subarrays whose sum equals k, including overlapping subarrays and negative values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/subarray_sum_k py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/subarray_sum_k py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
