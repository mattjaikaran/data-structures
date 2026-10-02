# Reverse list

Practice the matching question: [LeetCode #206: Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/).

Reverse a singly linked list by changing its next links. Return the new head.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/reverse_list py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/reverse_list py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reverseList` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reverse_list` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reverseList` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `reverse_list`, `reverse` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(reverseList(fromArray([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]), "reverse std");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Reverse a linked list iteratively. O(n) time, O(1) space.

[Back to the topic](../../README.md)
