# Num trees

Practice the matching question: [LeetCode #96: Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/).

Count distinct binary search tree shapes with n distinct ordered values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/num_trees js
npm run practice -- 12_dynamic_programming/problems/num_trees py
npm run practice -- 12_dynamic_programming/problems/num_trees ts
npm run practice -- 12_dynamic_programming/problems/num_trees rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `numTrees` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `count_unique_bst` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `numTrees` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `num_trees` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(numTrees(3)===5&&numTrees(1)===1,"numTrees");
```

[Back to the topic](../../README.md)
