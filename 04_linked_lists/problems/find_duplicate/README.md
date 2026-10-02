# Find duplicate

Practice the matching question: [LeetCode #287: Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/).

Find the repeated value in a sequence of n + 1 values in the range 1 through n.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/find_duplicate py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/find_duplicate py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findDuplicate` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_duplicate` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findDuplicate` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_duplicate` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(findDuplicate([1, 3, 4, 2, 2]) === 2, "duplicate 1");
```

## Solution notes

Find the Duplicate Number (LC #287)
Array of n+1 ints in [1,n]. Find the duplicate without modifying array.

Treat array as a linked list: index i → index nums[i].
A duplicate value creates a cycle. Use Floyd's to find the cycle entry.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
