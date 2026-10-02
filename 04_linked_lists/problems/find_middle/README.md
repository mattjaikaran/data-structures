# Find middle

Practice the matching question: [LeetCode #876: Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/).

Find the middle node, or its position in the Rust implementation. Select the second middle for an even-length list.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/find_middle js
npm run practice -- 04_linked_lists/problems/find_middle py
npm run practice -- 04_linked_lists/problems/find_middle ts
npm run practice -- 04_linked_lists/problems/find_middle rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findMiddle` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_middle` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findMiddle` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_middle_index` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const m1 = findMiddle(fromArray([1, 2, 3, 4, 5]));
const m2 = findMiddle(fromArray([1, 2, 3, 4]));
const m3 = findMiddle(fromArray([1]));
assert(m1 && m1.val === 3, "middle odd");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Find middle node using slow/fast pointers.
When fast reaches end, slow is at the middle.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
