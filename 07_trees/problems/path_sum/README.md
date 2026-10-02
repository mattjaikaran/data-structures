# Path sum

Practice the matching question: [LeetCode #113: Path Sum II](https://leetcode.com/problems/path-sum-ii/).

Determine whether a root-to-leaf path has the requested sum.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/path_sum py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `path_sum` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
ps_root = TreeNode.from_list([5,4,8,11,None,13,4,7,2,None,None,5,1])
paths = path_sum(ps_root, 22)
assert sorted(map(sorted, paths)) == sorted(map(sorted, [[5,4,11,2],[5,8,4,5]]))
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
