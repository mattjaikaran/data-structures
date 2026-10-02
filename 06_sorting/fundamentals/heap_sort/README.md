# Heap sort

Sort a sequence with a binary heap.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/heap_sort js
npm run practice -- 06_sorting/fundamentals/heap_sort py
npm run practice -- 06_sorting/fundamentals/heap_sort ts
npm run practice -- 06_sorting/fundamentals/heap_sort rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `heapSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `heap_sort` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `heapSort` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `heap_sort` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const tests = [
    [64, 34, 25, 12, 22, 11, 90],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [],
    [1, 1, 1],
  ];
const exp = tests.map((t) => [...t].sort((a, b) => a - b));
const fns = [
    [bubbleSort, "bubble"],
    [insertionSort, "insertion"],
    [mergeSort, "merge"],
    [quickSort, "quick"],
    [heapSort, "heap"],
  ];
for (const [fn, name] of fns) {
    for (let i = 0; i < tests.length; i++)
      assert(eq(fn(tests[i]), exp[i]), `${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
```

## Solution notes

O(n log n) — build max-heap, extract max n times.

[Back to the topic](../../README.md)
