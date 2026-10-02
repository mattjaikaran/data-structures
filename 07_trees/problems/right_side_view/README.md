# Right side view

Practice the matching question: [LeetCode #199: Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/).

Return the last visible node at each tree depth when viewed from the right.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/right_side_view py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/right_side_view py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `rightSideView` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `right_side_view` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `rightSideView` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `right_side_view` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(rightSideView(fromArray([1, 2, 3, null, 5, null, 4])), [1, 3, 4]), "rightSideView");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
