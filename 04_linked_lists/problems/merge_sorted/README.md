# Merge sorted

Practice the matching question: [LeetCode #21: Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/).

Merge two sorted linked lists into one sorted list.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/merge_sorted js
npm run practice -- 04_linked_lists/problems/merge_sorted py
npm run practice -- 04_linked_lists/problems/merge_sorted ts
npm run practice -- 04_linked_lists/problems/merge_sorted rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `mergeSorted` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `merge_sorted` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `mergeSorted` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `merge_sorted` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Merge two sorted linked lists.
Dummy head avoids special-casing the first node.
O(m+n) time, O(1) space.

[Back to the topic](../../README.md)
