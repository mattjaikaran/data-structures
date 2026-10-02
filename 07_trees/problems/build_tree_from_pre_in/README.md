# Build tree from pre in

Practice the matching question: [LeetCode #105: Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/).

Rebuild a binary tree from its preorder and inorder traversals with distinct values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/build_tree_from_pre_in js
npm run practice -- 07_trees/problems/build_tree_from_pre_in py
npm run practice -- 07_trees/problems/build_tree_from_pre_in ts
```

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
