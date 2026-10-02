# Swap pairs

Practice the matching question: [LeetCode #24: Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/).

Swap each adjacent pair of linked-list nodes.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/swap_pairs py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/swap_pairs py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `swapPairs` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `swap_pairs` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `swapPairs` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]), "swap even");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Swap Nodes in Pairs (LC #24)
Swap every two adjacent nodes.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
