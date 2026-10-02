# Has cycle

Practice the matching question: [LeetCode #141: Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/).

Determine whether following next links eventually revisits a node.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/has_cycle js
npm run practice -- 04_linked_lists/problems/has_cycle py
npm run practice -- 04_linked_lists/problems/has_cycle ts
```

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
