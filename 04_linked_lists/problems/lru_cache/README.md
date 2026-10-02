# Lru cache

Implement a fixed-capacity cache. Evict the least recently used entry when you insert into a full cache.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 04_linked_lists/problems/lru_cache py
# Edit the private solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/lru_cache py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `LRUCache` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `LRUCache` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `LRUCache` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
assert(lru.get(1) === 1, "lru get hit");
```

## Prerequisites

- [doubly linked list](../../fundamentals/doubly_linked_list/README.md)

## Solution notes

Least Recently Used Cache — O(1) get and put.

DESIGN
  HashMap  : key → DNode  (O(1) lookup by key)
  DLL      : most-recent at front, least-recent at back
  On get   : move the accessed node to front
  On put   : insert at front; if over capacity, evict from back

Why doubly linked? Because we need O(1) node removal anywhere,
not just at head/tail. A singly linked list would require O(n) to
find the predecessor.

[Back to the topic](../../README.md)
