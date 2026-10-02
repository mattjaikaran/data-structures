# Reverse list

Practice the matching question: [LeetCode #206: Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/).

Reverse a singly linked list by changing its next links. Return the new head.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/reverse_list js
npm run practice -- 04_linked_lists/problems/reverse_list py
npm run practice -- 04_linked_lists/problems/reverse_list ts
npm run practice -- 04_linked_lists/problems/reverse_list rs
```

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
