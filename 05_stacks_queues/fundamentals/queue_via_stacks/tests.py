import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.queue_via_stacks.solution import QueueViaStacks

qvs = QueueViaStacks()
qvs.enqueue(1)
qvs.enqueue(2)
qvs.enqueue(3)
assert qvs.dequeue() == 1 and qvs.peek() == 2
print("PASS 05_stacks_queues/queue_via_stacks (py)")
