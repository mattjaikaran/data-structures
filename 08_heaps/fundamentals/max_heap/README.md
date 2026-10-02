# Max heap

Maintain a complete binary tree whose parent values are no smaller than their children.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/fundamentals/max_heap js
npm run practice -- 08_heaps/fundamentals/max_heap py
npm run practice -- 08_heaps/fundamentals/max_heap ts
```

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
