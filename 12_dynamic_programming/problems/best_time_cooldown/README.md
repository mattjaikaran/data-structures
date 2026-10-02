# Best time cooldown

Practice the matching question: [LeetCode #309: Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/).

Maximize stock profit across trades with one cooldown day after each sale.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/best_time_cooldown py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/best_time_cooldown py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bestTimeCooldown` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `best_time_with_cooldown` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bestTimeCooldown` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bestTimeCooldown([1,2,3,0,2])===3,"cooldown");
```

[Back to the topic](../../README.md)
