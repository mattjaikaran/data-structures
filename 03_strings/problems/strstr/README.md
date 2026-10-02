# Strstr

Practice the matching question: [LeetCode #28: Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/).

Find the first occurrence of a pattern in a string.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/strstr py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/strstr py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `strstr` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert strstr("hello","ll")==2 and strstr("aaaaa","bba")==-1
```

## Prerequisites

- [kmp search](../../fundamentals/kmp_search/README.md)

[Back to the topic](../../README.md)
