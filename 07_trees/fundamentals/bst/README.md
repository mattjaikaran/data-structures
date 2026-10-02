# Bst

Represent a binary search tree or its nodes and traversal helpers. Keep left values below the node and right values above it.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/fundamentals/bst py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/fundamentals/bst py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
