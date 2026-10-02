# Move zeroes

Practice the matching question: [LeetCode #283: Move Zeroes](https://leetcode.com/problems/move-zeroes/).

Move zeroes to the end in place. Preserve the order of the nonzero values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/move_zeroes py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/move_zeroes py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
