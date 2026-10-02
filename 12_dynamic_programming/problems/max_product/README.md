# Max product

Practice the matching question: [LeetCode #152: Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/).

Return the largest product of a nonempty contiguous subarray.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/max_product js
npm run practice -- 12_dynamic_programming/problems/max_product py
npm run practice -- 12_dynamic_programming/problems/max_product ts
npm run practice -- 12_dynamic_programming/problems/max_product rs
```

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
