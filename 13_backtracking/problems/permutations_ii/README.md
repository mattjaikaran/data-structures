# Permutations ii

Practice the matching question: [LeetCode #47: Permutations II](https://leetcode.com/problems/permutations-ii/).

Generate unique orderings when the input contains duplicate values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/permutations_ii py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `permutations_ii` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
perms2 = permutations_ii([1,1,2])
assert len(perms2) == 3
```

[Back to the topic](../../README.md)
