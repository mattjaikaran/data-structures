# Single number ii

Practice the matching question: [LeetCode #137: Single Number II](https://leetcode.com/problems/single-number-ii/).

Find the value that appears once when all other values appear three times.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/single_number_ii js
npm run practice -- 11_bit_manipulation/problems/single_number_ii py
npm run practice -- 11_bit_manipulation/problems/single_number_ii ts
npm run practice -- 11_bit_manipulation/problems/single_number_ii rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `singleNumberII` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `single_number_ii` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `singleNumberII` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `single_number_ii` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(singleNumberII([2, 2, 3, 2]) === 3 && singleNumberII([0, 1, 0, 1, 0, 1, 99]) === 99, "singleII");
```

[Back to the topic](../../README.md)
