# Bubble sort

Sort a sequence by swapping adjacent out-of-order values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/bubble_sort js
npm run practice -- 06_sorting/fundamentals/bubble_sort py
npm run practice -- 06_sorting/fundamentals/bubble_sort ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bubbleSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `bubble_sort` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bubbleSort` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

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

O(n²) — repeatedly swap adjacent out-of-order elements.

[Back to the topic](../../README.md)
