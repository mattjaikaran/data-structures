# Expression add operators

Practice the matching question: [LeetCode #282: Expression Add Operators](https://leetcode.com/problems/expression-add-operators/).

Insert arithmetic operators between digits to reach the target value.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/expression_add_operators py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `expression_add_operators` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
ops = expression_add_operators("123", 6)
assert "1+2+3" in ops and "1*2*3" in ops
```

[Back to the topic](../../README.md)
