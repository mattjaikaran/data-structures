# Merge sort

Sort a sequence by splitting it and merging sorted parts.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/fundamentals/merge_sort py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/fundamentals/merge_sort py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_sort`, `merge` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeSort` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_sort` | Inside `solution.rs` |

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

O(n log n) — divide and conquer. Stable, great for linked lists.

[Back to the topic](../../README.md)
