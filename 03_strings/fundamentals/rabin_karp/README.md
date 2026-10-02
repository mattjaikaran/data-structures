# Rabin karp

Return all pattern match positions, including overlaps. Return every boundary for an empty pattern.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/fundamentals/rabin_karp py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/fundamentals/rabin_karp py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `rabin_karp` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert rabin_karp("ababa", "aba") == [0, 2]
assert rabin_karp("aaaa", "aa") == [0, 1, 2]
assert rabin_karp("abc", "z") == []
```

## Solution notes

Rabin-Karp rolling hash. O(n+m) avg.

[Back to the topic](../../README.md)
