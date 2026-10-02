# Dutch national flag

Practice the matching question: [LeetCode #75: Sort Colors](https://leetcode.com/problems/sort-colors/).

Partition values 0, 1, and 2 into sorted groups.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/problems/dutch_national_flag py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/problems/dutch_national_flag py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
