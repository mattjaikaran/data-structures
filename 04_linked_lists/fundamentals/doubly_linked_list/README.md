# Doubly linked list

Maintain both previous and next links during insertion and removal.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/fundamentals/doubly_linked_list py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/fundamentals/doubly_linked_list py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
