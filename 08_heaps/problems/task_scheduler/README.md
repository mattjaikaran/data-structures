# Task scheduler

Practice the matching question: [LeetCode #621: Task Scheduler](https://leetcode.com/problems/task-scheduler/).

Return the minimum schedule length when repeated tasks require a cooldown.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/task_scheduler js
npm run practice -- 08_heaps/problems/task_scheduler py
npm run practice -- 08_heaps/problems/task_scheduler ts
npm run practice -- 08_heaps/problems/task_scheduler rs
```

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
