# Min cost climbing stairs

Practice the matching question: [LeetCode #746: Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/).

Pay each chosen step cost and reach the top with the smallest total cost. Start at step zero or one.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/min_cost_climbing_stairs py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/min_cost_climbing_stairs py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `min_cost_climbing_stairs` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert min_cost_climbing_stairs([10, 15, 20]) == 15
assert min_cost_climbing_stairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) == 6
```

[Back to the topic](../../README.md)
