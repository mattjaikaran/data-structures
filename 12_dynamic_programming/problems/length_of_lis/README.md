# Length of lis

Practice the matching question: [LeetCode #300: Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/).

Return the length of the longest strictly increasing subsequence.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/length_of_lis py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/length_of_lis py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `lengthOfLIS` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_increasing_subsequence` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `lengthOfLIS` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `length_of_lis` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(lengthOfLIS([10,9,2,5,3,7,101,18])===4,"lis");
```

## Solution notes

Longest Increasing Subsequence (LC #300)
O(n log n) using patience sorting / binary search.
tails[i] = smallest tail of all LIS of length i+1

[Back to the topic](../../README.md)
