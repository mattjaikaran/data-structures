# Missing number

Practice the matching question: [LeetCode #268: Missing Number](https://leetcode.com/problems/missing-number/).

Find the missing value from the range zero through n.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/missing_number js
npm run practice -- 11_bit_manipulation/problems/missing_number py
npm run practice -- 11_bit_manipulation/problems/missing_number ts
npm run practice -- 11_bit_manipulation/problems/missing_number rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `missingNumber` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `missing_number` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `missingNumber` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `missing_number` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(missingNumber([3, 0, 1]) === 2 && missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8, "missing");
```

[Back to the topic](../../README.md)
