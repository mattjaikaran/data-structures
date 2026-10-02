# Min cost connect points

Practice the matching question: [LeetCode #1584: Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/).

Connect all points with the minimum total Manhattan-distance edge cost.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/min_cost_connect_points py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `min_cost_connect_points` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert min_cost_connect_points([[0,0],[2,2],[3,10],[5,2],[7,0]]) == 20
```

[Back to the topic](../../README.md)
