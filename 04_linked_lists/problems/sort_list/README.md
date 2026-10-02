# Sort list

Practice the matching question: [LeetCode #148: Sort List](https://leetcode.com/problems/sort-list/).

Sort a linked list by relinking its nodes.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/sort_list py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/sort_list py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `sortList` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `sort_list` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `sortList` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `sort_list`, `split_half` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(sortList(fromArray([4, 2, 1, 3]))), [1, 2, 3, 4]), "sort list");
```

## Prerequisites

- [merge sorted](../../problems/merge_sorted/README.md)
- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Sort List (LC #148)
Merge sort on a linked list.
O(n log n) time, O(log n) space (recursion stack).

[Back to the topic](../../README.md)
