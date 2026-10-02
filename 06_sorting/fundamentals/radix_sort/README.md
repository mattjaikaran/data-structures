# Radix sort

Sort nonnegative integers by processing their digits.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/fundamentals/radix_sort js
npm run practice -- 06_sorting/fundamentals/radix_sort py
npm run practice -- 06_sorting/fundamentals/radix_sort ts
npm run practice -- 06_sorting/fundamentals/radix_sort rs
```

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
