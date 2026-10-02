# Queue

Implement first-in, first-out enqueue, dequeue, and peek operations.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/fundamentals/queue js
npm run practice -- 05_stacks_queues/fundamentals/queue py
npm run practice -- 05_stacks_queues/fundamentals/queue ts
```

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
