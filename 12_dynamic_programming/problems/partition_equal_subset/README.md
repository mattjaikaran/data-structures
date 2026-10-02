# Partition equal subset

Practice the matching question: [LeetCode #416: Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/).

Determine whether the input can split into two subsets with equal sums.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/partition_equal_subset js
npm run practice -- 12_dynamic_programming/problems/partition_equal_subset py
npm run practice -- 12_dynamic_programming/problems/partition_equal_subset ts
npm run practice -- 12_dynamic_programming/problems/partition_equal_subset rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `partitionEqualSubset` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `partition_equal_subset` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `partitionEqualSubset` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `partition_equal_subset` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(partitionEqualSubset([1,5,11,5])&&!partitionEqualSubset([1,2,3,5]),"partition");
```

[Back to the topic](../../README.md)
