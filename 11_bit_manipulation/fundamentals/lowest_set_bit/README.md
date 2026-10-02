# Lowest set bit

Return the value of the least significant set bit, or zero for zero.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/lowest_set_bit py
```

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
