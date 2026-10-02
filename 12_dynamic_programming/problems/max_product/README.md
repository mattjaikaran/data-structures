# Max product

Practice the matching question: [LeetCode #152: Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/).

Return the largest product of a nonempty contiguous subarray.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/max_product py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/max_product py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `maxProduct` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `max_product_subarray` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `maxProduct` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `max_product` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(maxProduct([2,3,-2,4])===6&&maxProduct([-2,3,-4])===24,"maxProduct");
```

[Back to the topic](../../README.md)
