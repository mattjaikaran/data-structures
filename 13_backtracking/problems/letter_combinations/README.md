# Letter combinations

Practice the matching question: [LeetCode #17: Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/).

Generate letter combinations for digits on a telephone keypad.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/letter_combinations js
npm run practice -- 13_backtracking/problems/letter_combinations py
npm run practice -- 13_backtracking/problems/letter_combinations ts
npm run practice -- 13_backtracking/problems/letter_combinations rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `letterCombinations` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `letter_combinations` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `letterCombinations` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `letter_combinations` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(letterCombinations("23").sort(), ["ad","ae","af","bd","be","bf","cd","ce","cf"].sort()), "letterCombinations");
```

[Back to the topic](../../README.md)
