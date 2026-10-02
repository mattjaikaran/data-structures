# Max product subarray

Practice the matching question: [LeetCode #152: Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/).

Return the largest product of a nonempty contiguous subarray.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/max_product_subarray py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/max_product_subarray py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `maxProductSubarray` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `max_product_subarray` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `maxProductSubarray` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `max_product_subarray` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(maxProductSubarray([2, 3, -2, 4]) === 6, "max product");
```

## Solution notes

Maximum Product Subarray (LC #152)
Time: O(n)  Space: O(1)

TRICK: Track both min AND max at each step.
A negative * current_min can flip to the new max.

[Back to the topic](../../README.md)
