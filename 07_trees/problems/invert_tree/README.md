# Invert tree

Practice the matching question: [LeetCode #226: Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/).

Swap the left and right children at every node.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/invert_tree py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/invert_tree py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
