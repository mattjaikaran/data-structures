# Single number iii

Practice the matching question: [LeetCode #260: Single Number III](https://leetcode.com/problems/single-number-iii/).

Find the two values that appear once when all other values appear twice.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/problems/single_number_iii py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/problems/single_number_iii py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `singleNumberIII` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `single_number_iii` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `singleNumberIII` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `single_number_iii` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const [a, b] = singleNumberIII([1, 2, 1, 3, 2, 5]);
assert(eq(singleNumberIII([1, 2, 1, 3, 2, 5]).sort((a,b)=>a-b), [3,5]));
assert(eq(singleNumberIII([-1, 0]).sort((a,b)=>a-b), [-1,0]));
```

[Back to the topic](../../README.md)
