# Roman to int

Practice the matching question: [LeetCode #13: Roman to Integer](https://leetcode.com/problems/roman-to-integer/).

Convert a Roman numeral to an integer, including subtractive pairs.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/roman_to_int js
npm run practice -- 03_strings/problems/roman_to_int py
npm run practice -- 03_strings/problems/roman_to_int ts
npm run practice -- 03_strings/problems/roman_to_int rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `romanToInt` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `roman_to_int` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `romanToInt` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `roman_to_int` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(romanToInt("MCMXCIV") === 1994 && romanToInt("III") === 3, "romanToInt");
```

[Back to the topic](../../README.md)
