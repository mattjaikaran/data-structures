# Min heap

Maintain a complete binary tree whose parent values are no larger than their children.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/fundamentals/min_heap js
npm run practice -- 08_heaps/fundamentals/min_heap py
npm run practice -- 08_heaps/fundamentals/min_heap ts
npm run practice -- 08_heaps/fundamentals/min_heap rs
```

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
