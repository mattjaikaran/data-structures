# Find complement

Practice the matching question: [LeetCode #1009: Complement of Base 10 Integer](https://leetcode.com/problems/complement-of-base-10-integer/).

Invert the bits up to the highest set bit of a positive integer.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/problems/find_complement py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/problems/find_complement py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `find_complement` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert find_complement(5) == 2
```

[Back to the topic](../../README.md)
