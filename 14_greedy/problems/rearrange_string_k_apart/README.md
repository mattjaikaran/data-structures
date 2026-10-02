# Rearrange string k apart

Rearrange characters so equal characters are at least k positions apart, or return an empty string.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/rearrange_string_k_apart py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/rearrange_string_k_apart py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `rearrange_string_k_apart` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
from collections import Counter
result = rearrange_string_k_apart("aabbcc", 3)
assert Counter(result) == Counter("aabbcc")
assert all(result[i] != result[j] for i in range(len(result)) for j in range(i + 1, min(i + 3, len(result))))
assert rearrange_string_k_apart("aaabc", 3) == ""
```

[Back to the topic](../../README.md)
