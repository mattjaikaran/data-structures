# Random array pick

Return an index containing the requested value. Choose among matching indices at random.

Construct `RandomArrayPick(nums)`, then call `pick(target)` for a value present
in the original input. Keep that input unchanged while you use the picker.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 02_hash_maps/problems/random_array_pick py
# Edit the private solution path printed above.
npm run practice -- attempt 02_hash_maps/problems/random_array_pick py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `RandomArrayPick` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
from unittest.mock import patch
with patch("random.choice", side_effect=lambda indices: indices[-1]):
    picker = RandomArrayPick([8, 3, 8])
    assert picker.pick(8) == 2
    assert picker.pick(3) == 1
```

[Back to the topic](../../README.md)
