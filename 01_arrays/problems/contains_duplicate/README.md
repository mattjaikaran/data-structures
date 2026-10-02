# Contains duplicate

Practice the matching question: [LeetCode #217: Contains Duplicate](https://leetcode.com/problems/contains-duplicate/).

Return whether a value appears more than once in the input.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/contains_duplicate py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/contains_duplicate py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `containsDuplicate` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `contains_duplicate` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `containsDuplicate` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `contains_duplicate` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(containsDuplicate([1, 2, 1]));
assert(!containsDuplicate([1, 2, 3]));
assert(!containsDuplicate([]));
```

## Solution notes

Contains Duplicate (LC #217)
Time: O(n)  Space: O(n)

[Back to the topic](../../README.md)
