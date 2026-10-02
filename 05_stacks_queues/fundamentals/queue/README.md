# Queue

Implement first-in, first-out enqueue, dequeue, and peek operations.

Empty dequeue and peek return `undefined` in JavaScript and TypeScript.
Python raises `IndexError` for these empty operations.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/fundamentals/queue py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/fundamentals/queue py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `Queue` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `Queue` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `Queue` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
assert(q.dequeue() === 1 && q.peek() === 2, "Queue");
```

## Solution notes

Backed by collections.deque for O(1) enqueue and dequeue.

[Back to the topic](../../README.md)
