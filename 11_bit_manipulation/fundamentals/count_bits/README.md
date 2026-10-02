# Count bits

Practice the matching question: [LeetCode #191: Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/).

Count set bits in the integer.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/count_bits js
npm run practice -- 11_bit_manipulation/fundamentals/count_bits py
npm run practice -- 11_bit_manipulation/fundamentals/count_bits ts
npm run practice -- 11_bit_manipulation/fundamentals/count_bits rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `countBits` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `count_bits`, `number_of_1_bits` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `countBits` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `count_set_bits` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(countBits(0b1011) === 3 && countBits(0) === 0, "countBits");
```

## Solution notes

Brian Kernighan: repeatedly clear lowest set bit. O(# set bits).

[Back to the topic](../../README.md)
