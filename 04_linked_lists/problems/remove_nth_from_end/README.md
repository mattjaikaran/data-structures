# Remove nth from end

Practice the matching question: [LeetCode #19: Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/).

Remove the nth node counted from the end of a linked list.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/remove_nth_from_end py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/remove_nth_from_end py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `removeNthFromEnd` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `remove_nth_from_end` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `removeNthFromEnd` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `remove_nth_from_end` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]), "nth from end");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Remove Nth Node From End of List (LC #19)

Two-pointer trick:
  Advance `fast` n+1 steps ahead of `slow`.
  When fast hits None, slow.next is the target.
O(L) time, O(1) space.

[Back to the topic](../../README.md)
