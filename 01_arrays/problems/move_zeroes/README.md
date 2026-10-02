# Move zeroes

Practice the matching question: [LeetCode #283: Move Zeroes](https://leetcode.com/problems/move-zeroes/).

Move zeroes to the end in place. Preserve the order of the nonzero values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/move_zeroes js
npm run practice -- 01_arrays/problems/move_zeroes py
npm run practice -- 01_arrays/problems/move_zeroes ts
npm run practice -- 01_arrays/problems/move_zeroes rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `moveZeroes` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `move_zeroes` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `moveZeroes` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `move_zeroes` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const mz = [0, 1, 0, 3, 12];
moveZeroes(mz);
assert(deepEqual(mz, [1, 3, 12, 0, 0]), "move zeroes");
```

## Solution notes

Move Zeroes (LC #283) — in-place.
Time: O(n)  Space: O(1)
Pattern: Two pointers — left = insert slot for non-zeros.

[Back to the topic](../../README.md)
