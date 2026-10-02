# Add two numbers

Practice the matching question: [LeetCode #2: Add Two Numbers](https://leetcode.com/problems/add-two-numbers/).

Add numbers represented by linked lists of digits in reverse order. Carry between digit positions.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/add_two_numbers py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/add_two_numbers py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
