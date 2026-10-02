# Utf8 validation

Practice the matching question: [LeetCode #393: UTF-8 Validation](https://leetcode.com/problems/utf-8-validation/).

Check whether integer bytes form valid UTF-8 byte sequences.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/problems/utf8_validation py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/problems/utf8_validation py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `utf8_validation` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert utf8_validation([197, 130, 1])
```

[Back to the topic](../../README.md)
