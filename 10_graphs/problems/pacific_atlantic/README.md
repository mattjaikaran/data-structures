# Pacific atlantic

Practice the matching question: [LeetCode #417: Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/).

Return grid cells from which water can reach both oceans by flowing to an equal or lower neighbor.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/pacific_atlantic py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `pacific_atlantic` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert pacific_atlantic([[1]]) == [[0, 0]]
assert sorted(pacific_atlantic([[1, 2], [4, 3]])) == [[0, 1], [1, 0], [1, 1]]
```

[Back to the topic](../../README.md)
