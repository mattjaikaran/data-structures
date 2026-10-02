# Min stack

Maintain the minimum element as you push and pop values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/fundamentals/min_stack py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/fundamentals/min_stack py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `MinStack` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `MinStack` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `MinStack` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `MinStack` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
assert(ms.getMin() === 2, "MinStack min");
```

## Solution notes

Stack with O(1) get_min().
Parallel min_stack tracks the running minimum at every level.

[Back to the topic](../../README.md)
