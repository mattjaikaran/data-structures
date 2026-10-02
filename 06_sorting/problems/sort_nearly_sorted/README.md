# Sort nearly sorted

Sort a sequence whose values are at most k positions from their sorted positions.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/problems/sort_nearly_sorted py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `sort_nearly_sorted` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert sort_nearly_sorted([2,1,4,3,6,5,8,7], 1) == [1,2,3,4,5,6,7,8]
```

## Solution notes

Sort a k-sorted array (each element at most k positions from sorted pos).
Use min-heap of size k+1. O(n log k).

[Back to the topic](../../README.md)
