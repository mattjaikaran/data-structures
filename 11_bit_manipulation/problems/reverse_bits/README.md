# Reverse bits

Practice the matching question: [LeetCode #190: Reverse Bits](https://leetcode.com/problems/reverse-bits/).

Reverse the bits of an unsigned 32-bit integer.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/reverse_bits js
npm run practice -- 11_bit_manipulation/problems/reverse_bits py
npm run practice -- 11_bit_manipulation/problems/reverse_bits ts
npm run practice -- 11_bit_manipulation/problems/reverse_bits rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reverseBits` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reverse_bits` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reverseBits` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `reverse_bits` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(reverseBits(43261596) === 964176192, "reverseBits");
```

[Back to the topic](../../README.md)
