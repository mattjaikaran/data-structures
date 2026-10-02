# Product except self

Practice the matching question: [LeetCode #238: Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/).

Return the product of all other elements for each position, without division.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/product_except_self py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/product_except_self py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `productExceptSelf` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `product_except_self` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `productExceptSelf` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `product_except_self` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]), "product except self");
```

## Solution notes

Product of Array Except Self (LC #238)
No division allowed.
Time: O(n)  Space: O(1) extra (output array doesn't count)

Pattern: Two-pass prefix/suffix multiplication.
  Pass 1 left→right: result[i] = product of all nums to the LEFT of i
  Pass 2 right→left: multiply result[i] by product of all to the RIGHT

[Back to the topic](../../README.md)
