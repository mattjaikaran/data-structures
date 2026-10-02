# Combination sum ii

Practice the matching question: [LeetCode #40: Combination Sum II](https://leetcode.com/problems/combination-sum-ii/).

Return unique combinations that sum to the target. Use each candidate position at most once.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/combination_sum_ii py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/combination_sum_ii py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `combination_sum_ii` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
cs2 = combination_sum_ii([10,1,2,7,6,1,5], 8)
assert [1,1,6] in cs2 and [1,2,5] in cs2 and [1,7] in cs2 and [2,6] in cs2
```

[Back to the topic](../../README.md)
