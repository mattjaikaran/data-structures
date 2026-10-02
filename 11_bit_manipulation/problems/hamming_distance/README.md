# Hamming distance

Practice the matching question: [LeetCode #461: Hamming Distance](https://leetcode.com/problems/hamming-distance/).

Count bit positions where two integers differ.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/problems/hamming_distance py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/problems/hamming_distance py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `hammingDistance` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `hamming_distance` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `hammingDistance` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `hamming_distance` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(hammingDistance(1, 4) === 2 && hammingDistance(3, 1) === 1, "hamming");
```

## Prerequisites

- [count bits](../../fundamentals/count_bits/README.md)

[Back to the topic](../../README.md)
