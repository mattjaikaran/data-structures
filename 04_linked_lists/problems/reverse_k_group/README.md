# Reverse k group

Practice the matching question: [LeetCode #25: Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/).

Reverse complete groups of k linked-list nodes. Keep an incomplete final group unchanged.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/reverse_k_group py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/reverse_k_group py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reverseKGroup` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reverse_k_group` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reverseKGroup` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `reverse_k_group` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 2)), [2, 1, 4, 3, 5]), "k=2");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Reverse Nodes in k-Group (LC #25)
Reverse every k consecutive nodes. Leave remainder as-is.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
