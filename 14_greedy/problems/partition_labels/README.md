# Partition labels

Practice the matching question: [LeetCode #763: Partition Labels](https://leetcode.com/problems/partition-labels/).

Split a string so each character appears in only one part.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/partition_labels js
npm run practice -- 14_greedy/problems/partition_labels py
npm run practice -- 14_greedy/problems/partition_labels ts
npm run practice -- 14_greedy/problems/partition_labels rs
```

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
