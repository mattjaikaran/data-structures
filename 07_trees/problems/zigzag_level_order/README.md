# Zigzag level order

Return levels with alternating left-to-right and right-to-left order.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/zigzag_level_order js
npm run practice -- 07_trees/problems/zigzag_level_order ts
```

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
