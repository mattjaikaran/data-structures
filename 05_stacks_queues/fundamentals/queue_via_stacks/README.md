# Queue via stacks

Implement first-in, first-out queue operations with two last-in, first-out stacks.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/fundamentals/queue_via_stacks py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/fundamentals/queue_via_stacks py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
