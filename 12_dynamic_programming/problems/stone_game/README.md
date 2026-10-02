# Stone game

Practice the matching question: [LeetCode #877: Stone Game](https://leetcode.com/problems/stone-game/).

Determine whether the first player wins by choosing piles from either end.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/stone_game py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/stone_game py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `stone_game` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert stone_game([5, 3, 4, 5]) is True
assert stone_game([3, 7, 2, 3]) is True
```

[Back to the topic](../../README.md)
