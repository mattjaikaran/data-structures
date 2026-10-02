# Rabin karp

Return all pattern match positions, including overlaps. Return every boundary for an empty pattern.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/fundamentals/rabin_karp py
```

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
