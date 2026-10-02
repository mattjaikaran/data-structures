# Bitwise and range

Practice the matching question: [LeetCode #201: Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/).

Return the bitwise AND of every integer in an inclusive range.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/bitwise_and_range js
npm run practice -- 11_bit_manipulation/problems/bitwise_and_range py
npm run practice -- 11_bit_manipulation/problems/bitwise_and_range ts
npm run practice -- 11_bit_manipulation/problems/bitwise_and_range rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bitwiseAndRange` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `bitwise_and_range` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bitwiseAndRange` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `bitwise_and_range` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bitwiseAndRange(5, 7) === 4 && bitwiseAndRange(1, 2147483647) === 0, "andRange");
```

[Back to the topic](../../README.md)
