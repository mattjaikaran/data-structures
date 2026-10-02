# Queue via stacks

Implement first-in, first-out queue operations with two last-in, first-out stacks.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/fundamentals/queue_via_stacks py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `QueueViaStacks` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
qvs = QueueViaStacks()
qvs.enqueue(1)
qvs.enqueue(2)
qvs.enqueue(3)
assert qvs.dequeue() == 1 and qvs.peek() == 2
```

## Solution notes

Queue built from two stacks. O(1) amortized dequeue.
inbox: all pushes go here
outbox: pops come from here; refilled from inbox when empty

[Back to the topic](../../README.md)
