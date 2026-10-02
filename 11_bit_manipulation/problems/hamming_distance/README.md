# Hamming distance

Practice the matching question: [LeetCode #461: Hamming Distance](https://leetcode.com/problems/hamming-distance/).

Count bit positions where two integers differ.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/hamming_distance js
npm run practice -- 11_bit_manipulation/problems/hamming_distance py
npm run practice -- 11_bit_manipulation/problems/hamming_distance ts
npm run practice -- 11_bit_manipulation/problems/hamming_distance rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `hammingDistance` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `hamming_distance` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `hammingDistance` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `hamming_distance` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(hammingDistance(1, 4) === 2 && hammingDistance(3, 1) === 1, "hamming");
```

## Prerequisites

- [count bits](../../fundamentals/count_bits/README.md)

[Back to the topic](../../README.md)
