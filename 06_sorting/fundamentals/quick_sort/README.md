# Quick sort

Sort a sequence by partitioning around a pivot.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/quick_sort js
npm run practice -- 06_sorting/fundamentals/quick_sort py
npm run practice -- 06_sorting/fundamentals/quick_sort ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `quickSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `quick_sort` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `quickSort` | [tests.ts](tests.ts) |

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

O(n log n) avg, O(n²) worst — random pivot avoids worst case.

[Back to the topic](../../README.md)
