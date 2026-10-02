# Max heap

Maintain a complete binary tree whose parent values are no smaller than their children.

Empty pop and peek return `undefined` in JavaScript and TypeScript.
Python raises `IndexError` for these empty operations.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/fundamentals/max_heap py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/fundamentals/max_heap py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `MaxHeap` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `MaxHeap` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `MaxHeap` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const mxh = new MaxHeap();
[5, 2, 8, 1, 9].forEach((v) => mxh.push(v));
assert(mxh.peek() === 9, "maxheap peek");
```

## Prerequisites

- [min heap](../../fundamentals/min_heap/README.md)

[Back to the topic](../../README.md)
