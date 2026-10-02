# Partition equal subset

Practice the matching question: [LeetCode #416: Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/).

Determine whether the input can split into two subsets with equal sums.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/partition_equal_subset py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/partition_equal_subset py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
