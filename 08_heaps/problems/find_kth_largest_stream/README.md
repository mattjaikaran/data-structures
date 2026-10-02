# Find kth largest stream

Practice the matching question: [LeetCode #703: Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/).

Return the running kth largest value after each insertion. Return -1 before k values arrive.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/find_kth_largest_stream py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `find_kth_largest_stream` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert find_kth_largest_stream([4, 5, 8, 2], 3) == [-1, -1, 4, 4]
assert find_kth_largest_stream([2, 2, 1], 2) == [-1, 2, 2]
```

[Back to the topic](../../README.md)
