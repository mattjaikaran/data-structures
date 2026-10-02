# Random array pick

Return an index containing the requested value. Choose among matching indices at random.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/random_array_pick py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `random_array_pick` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
from unittest.mock import patch
with patch("random.choice", side_effect=lambda indices: indices[-1]):
    picker = random_array_pick([8, 3, 8])
    assert picker.pick(8) == 2
    assert picker.pick(3) == 1
```

[Back to the topic](../../README.md)
