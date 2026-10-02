# Detect cycle node

Practice the matching question: [LeetCode #142: Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/).

Return the node where a linked-list cycle starts, or the missing-node result when there is no cycle.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/detect_cycle_node py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/detect_cycle_node py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `detectCycleNode` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `detect_cycle_node` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `detectCycleNode` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const head = fromArray([1, 2, 3]);
const entry = head.next;
head.next.next.next = entry;
assert(detectCycleNode(head) === entry);
assert(detectCycleNode(fromArray([1, 2])) === null);
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Linked List Cycle II (LC #142)
Find the node where the cycle begins.

Math proof: if slow and fast meet at point X inside the cycle,
distance(head → cycle start) == distance(X → cycle start).
Reset slow to head, advance both at speed 1 → they meet at cycle start.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
