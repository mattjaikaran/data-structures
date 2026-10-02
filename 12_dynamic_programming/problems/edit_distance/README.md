# Edit distance

Practice the matching question: [LeetCode #72: Edit Distance](https://leetcode.com/problems/edit-distance/).

Return the smallest number of insertions, deletions, and substitutions needed to transform one string into another.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/edit_distance py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/edit_distance py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `editDistance` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `edit_distance` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `editDistance` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `edit_distance` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(editDistance("horse","ros")===3&&editDistance("intention","execution")===5,"editDist");
```

[Back to the topic](../../README.md)
