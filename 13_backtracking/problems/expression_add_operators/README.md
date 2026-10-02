# Expression add operators

Practice the matching question: [LeetCode #282: Expression Add Operators](https://leetcode.com/problems/expression-add-operators/).

Insert arithmetic operators between digits to reach the target value.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/expression_add_operators py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/expression_add_operators py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `expression_add_operators` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
ops = expression_add_operators("123", 6)
assert "1+2+3" in ops and "1*2*3" in ops
```

[Back to the topic](../../README.md)
