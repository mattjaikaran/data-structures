# Diameter of binary tree

Practice the matching question: [LeetCode #543: Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/).

Return the largest number of edges on a path between two tree nodes.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/diameter_of_binary_tree js
npm run practice -- 07_trees/problems/diameter_of_binary_tree py
npm run practice -- 07_trees/problems/diameter_of_binary_tree ts
npm run practice -- 07_trees/problems/diameter_of_binary_tree rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `diameterOfBinaryTree` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `diameter` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `diameterOfBinaryTree` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `diameter` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(diameterOfBinaryTree(fromArray([1, 2, 3, 4, 5])) === 3, "diameter");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
