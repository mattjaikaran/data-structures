# Remove nth from end

Practice the matching question: [LeetCode #19: Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/).

Remove the nth node counted from the end of a linked list.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/remove_nth_from_end js
npm run practice -- 04_linked_lists/problems/remove_nth_from_end py
npm run practice -- 04_linked_lists/problems/remove_nth_from_end ts
npm run practice -- 04_linked_lists/problems/remove_nth_from_end rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `removeNthFromEnd` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `remove_nth_from_end` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `removeNthFromEnd` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `remove_nth_from_end` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]), "nth from end");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Remove Nth Node From End of List (LC #19)

Two-pointer trick:
  Advance `fast` n+1 steps ahead of `slow`.
  When fast hits None, slow.next is the target.
O(L) time, O(1) space.

[Back to the topic](../../README.md)
