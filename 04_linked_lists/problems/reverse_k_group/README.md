# Reverse k group

Practice the matching question: [LeetCode #25: Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/).

Reverse complete groups of k linked-list nodes. Keep an incomplete final group unchanged.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/reverse_k_group js
npm run practice -- 04_linked_lists/problems/reverse_k_group py
npm run practice -- 04_linked_lists/problems/reverse_k_group ts
npm run practice -- 04_linked_lists/problems/reverse_k_group rs
```

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
