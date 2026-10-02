# Merge k sorted

Merge k sorted sequences into one sorted sequence.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/merge_k_sorted py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/merge_k_sorted py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
