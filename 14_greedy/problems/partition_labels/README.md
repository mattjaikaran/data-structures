# Partition labels

Practice the matching question: [LeetCode #763: Partition Labels](https://leetcode.com/problems/partition-labels/).

Split a string so each character appears in only one part.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/partition_labels py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/partition_labels py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `partitionLabels` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `partition_labels` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `partitionLabels` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `partition_labels` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(partitionLabels("ababcbacadefegdehijhklij"),[9,7,8]), "partitionLabels");
```

[Back to the topic](../../README.md)
