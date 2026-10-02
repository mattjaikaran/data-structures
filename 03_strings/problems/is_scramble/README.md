# Is scramble

Practice the matching question: [LeetCode #87: Scramble String](https://leetcode.com/problems/scramble-string/).

Determine whether recursive substring splits and swaps can transform one string into the other.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/is_scramble py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/is_scramble py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `is_scramble` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert is_scramble("great","rgeat") and not is_scramble("great","efta")
```

[Back to the topic](../../README.md)
