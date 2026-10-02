# Doubly linked list

Maintain both previous and next links during insertion and removal.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/fundamentals/doubly_linked_list js
npm run practice -- 04_linked_lists/fundamentals/doubly_linked_list py
npm run practice -- 04_linked_lists/fundamentals/doubly_linked_list ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `DNode`, `DoublyLinkedList` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `DNode`, `DoublyLinkedList` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `DNode`, `DoublyLinkedList` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const dll = new DoublyLinkedList();
dll.appendFront(0, 0);
dll.appendFront(1, 1);
assert(dll.size === 2, "dll size");
```

## Solution notes

Doubly linked list using sentinel head + tail nodes.
Sentinels eliminate every edge-case conditional.

The big win over singly: O(1) node removal if you hold a reference.
This is what makes LRU Cache O(1) end-to-end.

[Back to the topic](../../README.md)
