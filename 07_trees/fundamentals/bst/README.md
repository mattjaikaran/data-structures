# Bst

Represent a binary search tree or its nodes and traversal helpers. Keep left values below the node and right values above it.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/fundamentals/bst js
npm run practice -- 07_trees/fundamentals/bst py
npm run practice -- 07_trees/fundamentals/bst ts
npm run practice -- 07_trees/fundamentals/bst rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `TreeNode`, `fromArray`, `BST`, `inorder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `TreeNode`, `BST` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `TreeNode`, `fromArray`, `BST`, `inorder` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `TreeNode`, `Tree`, `from_vec`, `inorder` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const bst = new BST();
[5, 3, 7, 1, 4, 6, 8].forEach((v) => bst.insert(v));
assert(eq(bst.inorder(), [1, 3, 4, 5, 6, 7, 8]), "bst inorder");
```

[Back to the topic](../../README.md)
