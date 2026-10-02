# Zigzag level order

Return levels with alternating left-to-right and right-to-left order.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/zigzag_level_order js
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/zigzag_level_order js
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `zigzagLevelOrder` | [tests.js](tests.js) |
| TypeScript | [solution.ts](solution.ts) | `zigzagLevelOrder` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(zigzagLevelOrder(fromArray([3, 9, 20, null, null, 15, 7])), [
      [3],
      [20, 9],
      [15, 7],
    ]),
    "zigzag"
  );
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
