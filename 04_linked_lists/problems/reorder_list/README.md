# Reorder list

Practice the matching question: [LeetCode #143: Reorder List](https://leetcode.com/problems/reorder-list/).

Reorder nodes by alternating from the front and back of the list.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/reorder_list py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/reorder_list py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reorderList` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reorder_list` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reorderList` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const r1 = fromArray([1, 2, 3, 4, 5]);
reorderList(r1);
assert(deepEq(toArray(r1), [1, 5, 2, 4, 3]), "reorder odd");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Reorder List (LC #143)
L0 → Ln → L1 → Ln-1 → L2 → ...

Steps:
  1. Find middle (slow/fast)
  2. Reverse the second half
  3. Interleave the two halves
O(n) time, O(1) space.

[Back to the topic](../../README.md)
