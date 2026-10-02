# Subsets bitmask

Practice the matching question: [LeetCode #78: Subsets](https://leetcode.com/problems/subsets/).

Generate subsets by using a bitmask to decide which input values to include.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/problems/subsets_bitmask py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/problems/subsets_bitmask py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `subsetsFromMask` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `subsets_bitmask` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `subsetsFromMask` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `subsets_bitmask` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const subs = subsetsFromMask([1, 2, 3]);
assert(subs.length === 8, "subsets");
```

[Back to the topic](../../README.md)
