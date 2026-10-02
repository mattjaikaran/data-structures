# Three sum

Practice the matching question: [LeetCode #15: 3Sum](https://leetcode.com/problems/3sum/).

Return each unique triplet whose values sum to zero.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/three_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/three_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `threeSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `three_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `threeSum` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ts = threeSum([-1, 0, 1, 2, -1, -4]).map(t => [...t].sort((a, b) => a - b)).sort();
assert(deepEqual(ts, [[-1, -1, 2], [-1, 0, 1]]), "three sum");
```

## Solution notes

3Sum (LC #15)
Find all unique triplets summing to zero.
Time: O(n²)  Space: O(1)

Pattern: Sort + two pointers. Skip duplicates to avoid repeat triplets.

[Back to the topic](../../README.md)
