# Best time buy sell

Practice the matching question: [LeetCode #121: Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/).

Return the largest profit from buying once and selling on a later day. Return zero if no profitable trade exists.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/best_time_buy_sell py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/best_time_buy_sell py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bestTimeBuySell` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `best_time_buy_sell` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bestTimeBuySell` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `best_time_buy_sell` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bestTimeBuySell([7, 1, 5, 3, 6, 4]) === 5, "buy sell profit");
```

## Solution notes

Best Time to Buy and Sell Stock (LC #121)
One transaction max. Return max profit.
Time: O(n)  Space: O(1)
Pattern: Track running minimum, compute max profit at each step.

[Back to the topic](../../README.md)
