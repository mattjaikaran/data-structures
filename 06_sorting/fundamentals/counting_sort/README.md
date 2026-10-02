# Counting sort

Sort nonnegative integers by counting each value.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/counting_sort js
npm run practice -- 06_sorting/fundamentals/counting_sort py
npm run practice -- 06_sorting/fundamentals/counting_sort ts
npm run practice -- 06_sorting/fundamentals/counting_sort rs
```

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
