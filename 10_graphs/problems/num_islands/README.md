# Num islands

Practice the matching question: [LeetCode #200: Number of Islands](https://leetcode.com/problems/number-of-islands/).

Count connected groups of land cells using horizontal and vertical neighbors.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/num_islands py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/num_islands py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `numIslands` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `num_islands` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `numIslands` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `num_islands` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(numIslands([["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]) === 2, "islands");
```

[Back to the topic](../../README.md)
