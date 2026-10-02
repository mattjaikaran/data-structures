# Minimum cost tree

Practice the matching question: [LeetCode #1130: Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/).

Build a tree with the requested leaf order and minimize the sum of products at its internal nodes.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/minimum_cost_tree py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `minimum_cost_tree` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert minimum_cost_tree([6, 2, 4]) == 32
assert minimum_cost_tree([4, 11]) == 44
```

## Solution notes

Minimum Cost Tree From Leaf Values (LC #1130)
Monotonic stack approach: O(n)

[Back to the topic](../../README.md)
