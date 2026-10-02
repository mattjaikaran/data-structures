# Radix sort

Sort nonnegative integers by processing their digits.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/fundamentals/radix_sort py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/fundamentals/radix_sort py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `radixSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `radix_sort` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `radixSort` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `radix_sort` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(radixSort([170, 45, 75, 90, 802, 24, 2, 66]), [2, 24, 45, 66, 75, 90, 170, 802]),
    "radix"
  );
```

## Solution notes

O(d*(n+10)) — sort by each digit, least significant first.

[Back to the topic](../../README.md)
