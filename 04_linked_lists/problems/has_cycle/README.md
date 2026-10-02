# Has cycle

Practice the matching question: [LeetCode #141: Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/).

Determine whether following next links eventually revisits a node.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/has_cycle py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/has_cycle py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `hasCycle` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `has_cycle` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `hasCycle` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(!hasCycle(fromArray([1, 2, 3])), "no cycle");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Floyd's Tortoise & Hare.
Slow pointer moves 1 step; fast moves 2.
If they ever meet, there is a cycle.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
