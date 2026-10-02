# Quick sort inplace

Sort with index-based partitioning. The default call copies the input; explicit bounds mutate that input.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/quick_sort_inplace py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `quick_sort_inplace` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
values = [3, 1, 2, 1]
assert quick_sort_inplace(values) == [1, 1, 2, 3]
assert values == [3, 1, 2, 1]
assert quick_sort_inplace(values, 0, 3) is values
assert values == [1, 1, 2, 3]
```

[Back to the topic](../../README.md)
