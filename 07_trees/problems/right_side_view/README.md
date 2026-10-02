# Right side view

Practice the matching question: [LeetCode #199: Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/).

Return the last visible node at each tree depth when viewed from the right.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/right_side_view js
npm run practice -- 07_trees/problems/right_side_view py
npm run practice -- 07_trees/problems/right_side_view ts
npm run practice -- 07_trees/problems/right_side_view rs
```

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
