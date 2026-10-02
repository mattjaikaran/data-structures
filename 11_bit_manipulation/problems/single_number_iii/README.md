# Single number iii

Practice the matching question: [LeetCode #260: Single Number III](https://leetcode.com/problems/single-number-iii/).

Find the two values that appear once when all other values appear twice.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/single_number_iii js
npm run practice -- 11_bit_manipulation/problems/single_number_iii py
npm run practice -- 11_bit_manipulation/problems/single_number_iii ts
npm run practice -- 11_bit_manipulation/problems/single_number_iii rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `singleNumberIII` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `single_number_iii` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `singleNumberIII` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `single_number_iii` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const [a, b] = singleNumberIII([1, 2, 1, 3, 2, 5]);
assert(eq(singleNumberIII([1, 2, 1, 3, 2, 5]).sort((a,b)=>a-b), [3,5]));
assert(eq(singleNumberIII([-1, 0]).sort((a,b)=>a-b), [-1,0]));
```

[Back to the topic](../../README.md)
