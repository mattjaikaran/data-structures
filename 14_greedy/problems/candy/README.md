# Candy

Practice the matching question: [LeetCode #135: Candy](https://leetcode.com/problems/candy/).

Assign the smallest total number of candies so each child has one and higher-rated neighbors get more.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/candy py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/candy py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `candy` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `candy` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `candy` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `candy` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(candy([1,0,2]) === 5 && candy([1,2,2]) === 4, "candy");
```

[Back to the topic](../../README.md)
