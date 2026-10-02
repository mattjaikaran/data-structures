# Best time k transactions

Practice the matching question: [LeetCode #188: Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/).

Maximize stock profit with at most k completed trades.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/best_time_k_transactions py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/best_time_k_transactions py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `best_time_k_transactions` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert best_time_k_transactions(2, [3,2,6,5,0,3]) == 7
```

[Back to the topic](../../README.md)
