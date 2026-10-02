# Can finish

Practice the matching question: [LeetCode #207: Course Schedule](https://leetcode.com/problems/course-schedule/).

Determine whether all courses can finish without a cycle in their prerequisites.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/can_finish py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/can_finish py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `canFinish` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `can_finish` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `canFinish` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `can_finish` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(canFinish(2, [[1, 0]]) && !canFinish(2, [[1, 0], [0, 1]]), "canFinish");
```

[Back to the topic](../../README.md)
