# Lowest set bit

Return the value of the least significant set bit, or zero for zero.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/fundamentals/lowest_set_bit py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/fundamentals/lowest_set_bit py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `lowest_set_bit` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert lowest_set_bit(0) == 0
assert lowest_set_bit(12) == 4
assert lowest_set_bit(8) == 8
```

[Back to the topic](../../README.md)
