# Add two numbers

Practice the matching question: [LeetCode #2: Add Two Numbers](https://leetcode.com/problems/add-two-numbers/).

Add numbers represented by linked lists of digits in reverse order. Carry between digit positions.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/add_two_numbers js
npm run practice -- 04_linked_lists/problems/add_two_numbers py
npm run practice -- 04_linked_lists/problems/add_two_numbers ts
npm run practice -- 04_linked_lists/problems/add_two_numbers rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `addTwoNumbers` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `add_two_numbers` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `addTwoNumbers` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `add_two_numbers` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(toArray(addTwoNumbers(fromArray([2, 4, 3]), fromArray([5, 6, 4]))), [7, 0, 8]), "add nums");
```

## Prerequisites

- [singly linked list](../../fundamentals/singly_linked_list/README.md)

## Solution notes

Add Two Numbers (LC #2)
Digits stored in reverse order. Simulate column addition with carry.
O(max(m,n)) time, O(max(m,n)) space.

[Back to the topic](../../README.md)
