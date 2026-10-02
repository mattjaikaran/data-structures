# Prefix sum

Build cumulative sums so you can calculate the sum of a range without scanning that range again.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/fundamentals/prefix_sum js
npm run practice -- 01_arrays/fundamentals/prefix_sum py
npm run practice -- 01_arrays/fundamentals/prefix_sum ts
npm run practice -- 01_arrays/fundamentals/prefix_sum rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `buildPrefixSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `prefix_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `buildPrefixSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `prefix_sum`, `range_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const p = buildPrefixSum([1, 2, 3, 4, 5]);
assert(p[4] - p[1] === 9, "prefix range sum [1..3]");
```

## Solution notes

Build prefix sum array.
prefix[i] = sum of nums[0..i-1]  (prefix[0] = 0 as sentinel)

Range sum [l, r] = prefix[r+1] - prefix[l]
Time: O(n) build, O(1) query  Space: O(n)

[Back to the topic](../../README.md)
