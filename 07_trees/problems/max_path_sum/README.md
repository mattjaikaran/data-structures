# Max path sum

Practice the matching question: [LeetCode #124: Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/).

Return the largest sum along a nonempty path in a binary tree. A path does not need to pass through the root.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/max_path_sum js
npm run practice -- 07_trees/problems/max_path_sum py
npm run practice -- 07_trees/problems/max_path_sum ts
npm run practice -- 07_trees/problems/max_path_sum rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `maxPathSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `max_path_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `maxPathSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `max_path_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(maxPathSum(fromArray([-10, 9, 20, null, null, 15, 7])) === 42, "maxPathSum");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
