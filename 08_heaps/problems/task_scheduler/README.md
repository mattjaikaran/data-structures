# Task scheduler

Practice the matching question: [LeetCode #621: Task Scheduler](https://leetcode.com/problems/task-scheduler/).

Return the minimum schedule length when repeated tasks require a cooldown.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/task_scheduler py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/task_scheduler py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `taskScheduler` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `task_scheduler` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `taskScheduler` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `task_scheduler` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(taskScheduler([..."AAAAABCD"], 2) === 13, "taskScheduler");
```

[Back to the topic](../../README.md)
