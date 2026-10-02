# Is valid bst

Check the search-tree ordering across entire subtrees, not just immediate children.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/is_valid_bst js
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/is_valid_bst js
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isValidBST` | [tests.js](tests.js) |
| TypeScript | [solution.ts](solution.ts) | `isValidBST` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_valid_bst` | Inside `solution.rs` |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isValidBST(fromArray([2, 1, 3])), "validBST");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
