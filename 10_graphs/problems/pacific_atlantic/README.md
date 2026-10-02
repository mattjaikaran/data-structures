# Pacific atlantic

Practice the matching question: [LeetCode #417: Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/).

Return grid cells from which water can reach both oceans by flowing to an equal or lower neighbor.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/pacific_atlantic py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/pacific_atlantic py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `pacific_atlantic` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert pacific_atlantic([[1]]) == [[0, 0]]
assert sorted(pacific_atlantic([[1, 2], [4, 3]])) == [[0, 1], [1, 0], [1, 1]]
```

[Back to the topic](../../README.md)
