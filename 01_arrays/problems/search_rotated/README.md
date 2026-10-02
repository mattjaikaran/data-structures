# Search rotated

Practice the matching question: [LeetCode #33: Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/).

Find a target in a rotated, sorted sequence of distinct values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/search_rotated py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/search_rotated py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `searchRotated` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `search_rotated` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `searchRotated` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `search_rotated` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
```

## Solution notes

Search in Rotated Sorted Array (LC #33)
Time: O(log n)  Space: O(1)

KEY INSIGHT: One half is ALWAYS sorted. Check which half,
then determine if target is within that sorted range.

[Back to the topic](../../README.md)
