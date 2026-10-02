# Counting sort

Sort nonnegative integers by counting each value.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/fundamentals/counting_sort py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/fundamentals/counting_sort py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `countingSort` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `counting_sort` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `countingSort` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `counting_sort` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(countingSort([4, 2, 2, 8, 3, 3, 1]), [1, 2, 2, 3, 3, 4, 8]),
    "counting"
  );
```

## Solution notes

O(n+k) — only works for non-negative integers in a known range.

[Back to the topic](../../README.md)
