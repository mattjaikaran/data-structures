import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.stack.solution import Stack

s = Stack()
s.push(1)
s.push(2)
s.push(3)
assert s.peek() == 3 and s.pop() == 3 and len(s) == 2
print("PASS 05_stacks_queues/stack (py)")
