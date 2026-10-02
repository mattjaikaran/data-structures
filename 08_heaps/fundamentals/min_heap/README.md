# Min heap

Maintain a complete binary tree whose parent values are no larger than their children.

Empty pop and peek return `undefined` in JavaScript and TypeScript, raise
`IndexError` in Python, and return `None` in Rust.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/fundamentals/min_heap py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/fundamentals/min_heap py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `MinHeap` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `MinHeap` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `MinHeap` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `MinHeap` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const mnh = new MinHeap();
[5, 2, 8, 1, 9].forEach((v) => mnh.push(v));
assert(mnh.peek() === 1, "minheap peek");
```

[Back to the topic](../../README.md)
