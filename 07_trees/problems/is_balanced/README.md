# Is balanced

Practice the matching question: [LeetCode #110: Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/).

Check whether subtree heights differ by at most one at every node.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/is_balanced py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/is_balanced py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isBalanced` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_balanced` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isBalanced` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_balanced` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isBalanced(fromArray([3, 9, 20, null, null, 15, 7])), "balanced");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
