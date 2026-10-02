# Product except self

Practice the matching question: [LeetCode #238: Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/).

Return the product of all other elements for each position, without division.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/product_except_self js
npm run practice -- 01_arrays/problems/product_except_self py
npm run practice -- 01_arrays/problems/product_except_self ts
npm run practice -- 01_arrays/problems/product_except_self rs
```

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
