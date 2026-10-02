# Build tree from pre in

Practice the matching question: [LeetCode #105: Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/).

Rebuild a binary tree from its preorder and inorder traversals with distinct values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/build_tree_from_pre_in py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/build_tree_from_pre_in py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `buildTreeFromPreIn` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `build_from_preorder_inorder` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `buildTreeFromPreIn` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(
      buildTreeFromPreIn([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]),
      fromArray([3, 9, 20, null, null, 15, 7])
    ),
    "buildFromPreIn"
  );
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
