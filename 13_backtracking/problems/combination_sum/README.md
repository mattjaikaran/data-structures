# Combination sum

Practice the matching question: [LeetCode #39: Combination Sum](https://leetcode.com/problems/combination-sum/).

Return combinations that sum to the target. You can reuse candidate values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/combination_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/combination_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `combinationSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `combination_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `combinationSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `combination_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const cs = combinationSum([2,3,6,7], 7);
assert(cs.length === 2 && cs.some(c => eq(c,[7])), "combinationSum");
```

[Back to the topic](../../README.md)
