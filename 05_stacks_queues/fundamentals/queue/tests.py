import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.queue.solution import Queue

q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
assert q.dequeue() == 1 and q.peek() == 2
print("PASS 05_stacks_queues/queue (py)")
