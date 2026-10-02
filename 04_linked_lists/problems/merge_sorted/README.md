# Merge sorted

Practice the matching question: [LeetCode #21: Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/).

Merge two sorted linked lists into one sorted list.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/merge_sorted py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/merge_sorted py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeSorted` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_sorted` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeSorted` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_sorted` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Merge two sorted linked lists.
Dummy head avoids special-casing the first node.
O(m+n) time, O(1) space.

[Back to the topic](../../README.md)
