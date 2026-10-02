# Letter combinations

Practice the matching question: [LeetCode #17: Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/).

Generate letter combinations for digits on a telephone keypad.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/letter_combinations py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/letter_combinations py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
