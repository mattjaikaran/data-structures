# Subsets bitmask

Practice the matching question: [LeetCode #78: Subsets](https://leetcode.com/problems/subsets/).

Generate subsets by using a bitmask to decide which input values to include.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/subsets_bitmask js
npm run practice -- 11_bit_manipulation/problems/subsets_bitmask py
npm run practice -- 11_bit_manipulation/problems/subsets_bitmask ts
npm run practice -- 11_bit_manipulation/problems/subsets_bitmask rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `subsetsFromMask` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `subsets_bitmask` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `subsetsFromMask` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `subsets_bitmask` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const subs = subsetsFromMask([1, 2, 3]);
assert(subs.length === 8, "subsets");
```

[Back to the topic](../../README.md)
