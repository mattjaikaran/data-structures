# Lowest common ancestor

Practice the matching question: [LeetCode #236: Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/).

Return the lowest node that contains both requested nodes in its subtree.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/lowest_common_ancestor py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/lowest_common_ancestor py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
