# Invert tree

Practice the matching question: [LeetCode #226: Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/).

Swap the left and right children at every node.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/invert_tree js
npm run practice -- 07_trees/problems/invert_tree py
npm run practice -- 07_trees/problems/invert_tree ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `invertTree` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `invert_tree` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `invertTree` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const inv = fromArray([4, 2, 7, 1, 3, 6, 9]);
invertTree(inv);
assert(inorder(inv)[0] === 9, "invertTree");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
