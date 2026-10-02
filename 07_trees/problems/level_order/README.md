# Level order

Practice the matching question: [LeetCode #102: Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/).

Return binary-tree values grouped by depth, from left to right.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/level_order js
npm run practice -- 07_trees/problems/level_order py
npm run practice -- 07_trees/problems/level_order ts
npm run practice -- 07_trees/problems/level_order rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `levelOrder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `level_order` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `levelOrder` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `level_order` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const t = fromArray([3, 9, 20, null, null, 15, 7]);
assert(maxDepth(t) === 3, "maxDepth");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
