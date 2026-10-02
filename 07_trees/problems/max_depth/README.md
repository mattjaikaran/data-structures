# Max depth

Practice the matching question: [LeetCode #104: Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/).

Return the number of nodes on the longest root-to-leaf path.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/max_depth py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/max_depth py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
