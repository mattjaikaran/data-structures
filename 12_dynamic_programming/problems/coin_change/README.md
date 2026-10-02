# Coin change

Practice the matching question: [LeetCode #322: Coin Change](https://leetcode.com/problems/coin-change/).

Return the smallest number of coins needed for an amount, or -1 when it is impossible.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/coin_change py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/coin_change py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `coinChange` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `coin_change` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `coinChange` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `coin_change` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(coinChange([1,5,11],15)===3&&coinChange([2],3)===-1,"coinChange");
```

[Back to the topic](../../README.md)
