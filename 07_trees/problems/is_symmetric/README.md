# Is symmetric

Practice the matching question: [LeetCode #101: Symmetric Tree](https://leetcode.com/problems/symmetric-tree/).

Check whether the left and right subtrees are mirror images.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/is_symmetric js
npm run practice -- 07_trees/problems/is_symmetric py
npm run practice -- 07_trees/problems/is_symmetric ts
npm run practice -- 07_trees/problems/is_symmetric rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isSymmetric` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_symmetric` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isSymmetric` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_symmetric` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isSymmetric(fromArray([1, 2, 2, 3, 4, 4, 3])), "symmetric");
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
