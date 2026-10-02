# Sort list

Practice the matching question: [LeetCode #148: Sort List](https://leetcode.com/problems/sort-list/).

Sort a linked list by relinking its nodes.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/sort_list js
npm run practice -- 04_linked_lists/problems/sort_list py
npm run practice -- 04_linked_lists/problems/sort_list ts
npm run practice -- 04_linked_lists/problems/sort_list rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `sortList` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `sort_list` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `sortList` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `sort_list`, `split_half` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(sortList(fromArray([4, 2, 1, 3]))), [1, 2, 3, 4]), "sort list");
```

## Prerequisites

- [merge sorted](../../problems/merge_sorted/README.md)
- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Sort List (LC #148)
Merge sort on a linked list.
O(n log n) time, O(log n) space (recursion stack).

[Back to the topic](../../README.md)
