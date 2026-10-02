# Count bits

Practice the matching question: [LeetCode #191: Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/).

Count set bits in the integer.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/fundamentals/count_bits py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/fundamentals/count_bits py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `countBits` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `count_bits`, `number_of_1_bits` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `countBits` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `count_set_bits` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(countBits(0b1011) === 3 && countBits(0) === 0, "countBits");
```

## Solution notes

Brian Kernighan: repeatedly clear lowest set bit. O(# set bits).

[Back to the topic](../../README.md)
