# Merge k lists

Practice the matching question: [LeetCode #23: Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/).

Merge k sorted linked lists.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/merge_k_lists py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/merge_k_lists py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeKLists` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_k_sorted` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeKLists` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_k_lists` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const kl = [fromArray([1, 4, 5]), fromArray([1, 3, 4]), fromArray([2, 6])];
assert(deepEq(toArray(mergeKLists(kl)), [1, 1, 2, 3, 4, 4, 5, 6]), "merge k lists");
```

## Prerequisites

- [merge sorted](../../problems/merge_sorted/README.md)
- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Merge K Sorted Lists (LC #23)
Divide and conquer — pair lists and merge repeatedly.
O(n log k) time where n = total nodes, k = number of lists.

[Back to the topic](../../README.md)
