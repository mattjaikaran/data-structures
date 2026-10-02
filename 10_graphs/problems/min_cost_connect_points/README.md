# Min cost connect points

Practice the matching question: [LeetCode #1584: Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/).

Connect all points with the minimum total Manhattan-distance edge cost.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/min_cost_connect_points py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/min_cost_connect_points py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `min_cost_connect_points` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert min_cost_connect_points([[0,0],[2,2],[3,10],[5,2],[7,0]]) == 20
```

[Back to the topic](../../README.md)
