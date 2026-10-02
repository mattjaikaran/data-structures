# Is balanced

Practice the matching question: [LeetCode #110: Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/).

Check whether subtree heights differ by at most one at every node.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 07_trees/problems/is_balanced js
npm run practice -- 07_trees/problems/is_balanced py
npm run practice -- 07_trees/problems/is_balanced ts
npm run practice -- 07_trees/problems/is_balanced rs
```

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
