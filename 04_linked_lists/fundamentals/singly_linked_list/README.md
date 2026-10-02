# Singly linked list

Represent a chain of nodes. Implement the available list operations and conversion helpers without losing links.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/fundamentals/singly_linked_list js
npm run practice -- 04_linked_lists/fundamentals/singly_linked_list py
npm run practice -- 04_linked_lists/fundamentals/singly_linked_list ts
npm run practice -- 04_linked_lists/fundamentals/singly_linked_list rs
```

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
