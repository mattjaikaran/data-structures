# Remove duplicates

Practice the matching question: [LeetCode #83: Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/).

Remove duplicate values from a sorted linked list.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/remove_duplicates py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/remove_duplicates py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `removeDuplicates` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `remove_duplicates` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `removeDuplicates` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `remove_duplicates` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 2, 3, 3]))), [1, 2, 3]), "dedup");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Remove Duplicates from Sorted List (LC #83)
O(n) time, O(1) space.

[Back to the topic](../../README.md)
