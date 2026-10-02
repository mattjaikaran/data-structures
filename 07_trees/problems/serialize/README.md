# Serialize

Practice the matching question: [LeetCode #297: Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/).

Encode a binary tree, including absent children, so you can reconstruct its shape.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/serialize py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `serialize` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
s_root = TreeNode.from_list([1,2,3,None,None,4,5])
data = serialize(s_root)
restored = deserialize(data)
assert serialize(restored) == data
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
