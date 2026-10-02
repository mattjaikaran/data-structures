# Heap sort

Sort a sequence with a binary heap.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/fundamentals/heap_sort py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/fundamentals/heap_sort py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
