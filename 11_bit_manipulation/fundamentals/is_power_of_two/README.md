# Is power of two

Practice the matching question: [LeetCode #231: Power of Two](https://leetcode.com/problems/power-of-two/).

Determine whether a positive integer is a power of two.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/is_power_of_two js
npm run practice -- 11_bit_manipulation/fundamentals/is_power_of_two py
npm run practice -- 11_bit_manipulation/fundamentals/is_power_of_two ts
npm run practice -- 11_bit_manipulation/fundamentals/is_power_of_two rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isPowerOfTwo` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_power_of_two`, `power_of_two` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isPowerOfTwo` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_power_of_two` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isPowerOfTwo(16) && isPowerOfTwo(1) && !isPowerOfTwo(6), "pow2");
```

[Back to the topic](../../README.md)
