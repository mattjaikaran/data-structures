# Is valid bst

Check the search-tree ordering across entire subtrees, not just immediate children.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/is_valid_bst js
npm run practice -- 07_trees/problems/is_valid_bst ts
npm run practice -- 07_trees/problems/is_valid_bst rs
```

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
