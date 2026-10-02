# Count bits range

Practice the matching question: [LeetCode #338: Counting Bits](https://leetcode.com/problems/counting-bits/).

Return the set-bit count for each integer from zero through n.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/count_bits_range js
npm run practice -- 11_bit_manipulation/problems/count_bits_range py
npm run practice -- 11_bit_manipulation/problems/count_bits_range ts
npm run practice -- 11_bit_manipulation/problems/count_bits_range rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `countBitsRange` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `count_bits_range` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `countBitsRange` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `count_bits_range` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(countBitsRange(5), [0, 1, 1, 2, 1, 2]), "countRange");
```

[Back to the topic](../../README.md)
