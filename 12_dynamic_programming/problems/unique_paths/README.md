# Unique paths

Practice the matching question: [LeetCode #62: Unique Paths](https://leetcode.com/problems/unique-paths/).

Count paths through a rectangular grid when you can move only right or down.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/unique_paths py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/unique_paths py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `uniquePaths` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `unique_paths` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `uniquePaths` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `unique_paths` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(uniquePaths(3,7)===28&&uniquePaths(3,2)===3,"uniquePaths");
```

[Back to the topic](../../README.md)
