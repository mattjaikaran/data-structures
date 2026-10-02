# Max depth

Practice the matching question: [LeetCode #104: Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/).

Return the number of nodes on the longest root-to-leaf path.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/max_depth js
npm run practice -- 07_trees/problems/max_depth py
npm run practice -- 07_trees/problems/max_depth ts
npm run practice -- 07_trees/problems/max_depth rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `maxDepth` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `max_depth` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `maxDepth` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `max_depth` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const t = fromArray([3, 9, 20, null, null, 15, 7]);
assert(maxDepth(t) === 3, "maxDepth");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
