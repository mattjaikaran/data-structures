# Kth smallest

Practice the matching question: [LeetCode #230: Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/).

Return the kth smallest value in a binary search tree.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/kth_smallest js
npm run practice -- 07_trees/problems/kth_smallest py
npm run practice -- 07_trees/problems/kth_smallest ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `kthSmallest` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `kth_smallest` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `kthSmallest` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const bst3 = new BST();
[3, 1, 4, null, 2].forEach((v) => v != null && bst3.insert(v));
assert(kthSmallest(bst3.root, 1) === 1, "kthSmallest");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
