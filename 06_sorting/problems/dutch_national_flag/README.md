# Dutch national flag

Practice the matching question: [LeetCode #75: Sort Colors](https://leetcode.com/problems/sort-colors/).

Partition values 0, 1, and 2 into sorted groups.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/problems/dutch_national_flag js
npm run practice -- 06_sorting/problems/dutch_national_flag py
npm run practice -- 06_sorting/problems/dutch_national_flag ts
npm run practice -- 06_sorting/problems/dutch_national_flag rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `dutchNationalFlag` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `dutch_national_flag` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `dutchNationalFlag` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `dutch_national_flag` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    eq(dutchNationalFlag([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]),
    "dutch"
  );
```

## Solution notes

Sort array of 0s, 1s, 2s in O(n) with O(1) space (LC #75).
Three-way partition (also the core of 3-way quicksort).

[Back to the topic](../../README.md)
