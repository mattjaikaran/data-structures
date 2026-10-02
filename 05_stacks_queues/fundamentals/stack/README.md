# Stack

Implement last-in, first-out push, pop, and peek operations.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/fundamentals/stack py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/fundamentals/stack py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `Stack` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `Stack` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `Stack` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `Stack` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
assert(s.peek() === 3 && s.pop() === 3 && s.size === 2, "Stack");
```

[Back to the topic](../../README.md)
