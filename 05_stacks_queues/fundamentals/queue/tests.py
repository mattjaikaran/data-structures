import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.queue.solution import Queue

q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
assert q.dequeue() == 1 and q.peek() == 2
q.enqueue(4)
assert q.dequeue() == 2
assert q.dequeue() == 3
assert q.peek() == 4 and q.dequeue() == 4
assert q.is_empty()
try:
    q.dequeue()
except IndexError:
    pass
else:
    raise AssertionError('Empty queue must reject dequeue')
q.enqueue(5)
assert q.peek() == 5 and q.dequeue() == 5 and q.is_empty()

print("PASS 05_stacks_queues/queue (py)")
