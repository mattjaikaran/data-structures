# Combination sum ii

Practice the matching question: [LeetCode #40: Combination Sum II](https://leetcode.com/problems/combination-sum-ii/).

Return unique combinations that sum to the target. Use each candidate position at most once.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/combination_sum_ii py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `combination_sum_ii` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
cs2 = combination_sum_ii([10,1,2,7,6,1,5], 8)
assert [1,1,6] in cs2 and [1,2,5] in cs2 and [1,7] in cs2 and [2,6] in cs2
```

[Back to the topic](../../README.md)
