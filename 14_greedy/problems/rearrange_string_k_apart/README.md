# Rearrange string k apart

Rearrange characters so equal characters are at least k positions apart, or return an empty string.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/rearrange_string_k_apart py
```

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
