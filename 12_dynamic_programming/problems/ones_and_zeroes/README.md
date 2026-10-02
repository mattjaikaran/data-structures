# Ones and zeroes

Practice the matching question: [LeetCode #474: Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/).

Choose the largest subset of binary strings that fits the available zero and one counts.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/ones_and_zeroes py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `ones_and_zeroes` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert ones_and_zeroes(["10", "0001", "111001", "1", "0"], 5, 3) == 4
assert ones_and_zeroes(["10"], 2, 2) == 1
```

[Back to the topic](../../README.md)
