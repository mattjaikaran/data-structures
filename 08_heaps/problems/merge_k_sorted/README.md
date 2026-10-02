# Merge k sorted

Merge k sorted sequences into one sorted sequence.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/merge_k_sorted js
npm run practice -- 08_heaps/problems/merge_k_sorted py
npm run practice -- 08_heaps/problems/merge_k_sorted ts
npm run practice -- 08_heaps/problems/merge_k_sorted rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeKSorted` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_k_sorted` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeKSorted` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_k_sorted` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(mergeKSorted([[1, 4, 5], [1, 3, 4], [2, 6]]), [1, 1, 2, 3, 4, 4, 5, 6]),
    "mergeKSorted"
  );
```

## Solution notes

Merge K Sorted Lists — O(n log k)

[Back to the topic](../../README.md)
