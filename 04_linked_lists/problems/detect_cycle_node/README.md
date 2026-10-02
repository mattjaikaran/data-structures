# Detect cycle node

Practice the matching question: [LeetCode #142: Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/).

Return the node where a linked-list cycle starts, or the missing-node result when there is no cycle.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/detect_cycle_node js
npm run practice -- 04_linked_lists/problems/detect_cycle_node py
npm run practice -- 04_linked_lists/problems/detect_cycle_node ts
```

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
