# Num trees

Practice the matching question: [LeetCode #96: Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/).

Count distinct binary search tree shapes with n distinct ordered values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/num_trees py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/num_trees py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
