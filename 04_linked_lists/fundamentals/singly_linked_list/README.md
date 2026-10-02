# Singly linked list

Represent a chain of nodes. Implement the available list operations and conversion helpers without losing links.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/fundamentals/singly_linked_list py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/fundamentals/singly_linked_list py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `SNode`, `SinglyLinkedList`, `fromArray`, `toArray` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `SNode`, `SinglyLinkedList`, `from_list`, `to_list` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `SNode`, `SinglyLinkedList`, `fromArray`, `toArray` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `ListNode`, `Link`, `from_slice`, `to_vec`, `length` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ll = new SinglyLinkedList();
[1, 2, 3, 4, 5].forEach(v => ll.append(v));
assert(deepEq(ll.toArray(), [1, 2, 3, 4, 5]), "sll append");
```

## Solution notes

Singly linked list with head and tail pointers.
Tail pointer makes append O(1) without any traversal.

[Back to the topic](../../README.md)
