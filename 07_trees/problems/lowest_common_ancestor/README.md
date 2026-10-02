# Lowest common ancestor

Practice the matching question: [LeetCode #236: Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/).

Return the lowest node that contains both requested nodes in its subtree.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/lowest_common_ancestor js
npm run practice -- 07_trees/problems/lowest_common_ancestor py
npm run practice -- 07_trees/problems/lowest_common_ancestor ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `lowestCommonAncestor` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `lca` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `lowestCommonAncestor` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
assert(lowestCommonAncestor(root, root.left, root.right) === root);
assert(lowestCommonAncestor(root, root, root.left) === root);
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
