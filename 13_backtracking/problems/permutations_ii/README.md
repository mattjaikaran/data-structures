# Permutations ii

Practice the matching question: [LeetCode #47: Permutations II](https://leetcode.com/problems/permutations-ii/).

Generate unique orderings when the input contains duplicate values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/permutations_ii py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/permutations_ii py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `permutations_ii` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
perms2 = permutations_ii([1,1,2])
assert len(perms2) == 3
```

[Back to the topic](../../README.md)
