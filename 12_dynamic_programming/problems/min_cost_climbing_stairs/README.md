# Min cost climbing stairs

Practice the matching question: [LeetCode #746: Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/).

Pay each chosen step cost and reach the top with the smallest total cost. Start at step zero or one.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/min_cost_climbing_stairs py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `min_cost_climbing_stairs` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert min_cost_climbing_stairs([10, 15, 20]) == 15
assert min_cost_climbing_stairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) == 6
```

[Back to the topic](../../README.md)
