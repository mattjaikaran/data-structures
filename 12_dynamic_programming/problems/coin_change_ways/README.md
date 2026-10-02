# Coin change ways

Practice the matching question: [LeetCode #518: Coin Change II](https://leetcode.com/problems/coin-change-ii/).

Count combinations of coins that make the amount. Do not count different orders separately.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/coin_change_ways py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/coin_change_ways py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `coinChangeWays` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `coin_change_ways` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `coinChangeWays` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(coinChangeWays([1,2,5],5)===4,"coinWays");
```

[Back to the topic](../../README.md)
