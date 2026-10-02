# Max path sum

Practice the matching question: [LeetCode #124: Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/).

Return the largest sum along a nonempty path in a binary tree. A path does not need to pass through the root.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/max_path_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/max_path_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
