# Level order

Practice the matching question: [LeetCode #102: Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/).

Return binary-tree values grouped by depth, from left to right.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/level_order py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/level_order py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
