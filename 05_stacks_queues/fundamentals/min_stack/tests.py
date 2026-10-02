import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.min_stack.solution import MinStack

ms = MinStack()
ms.push(5)
ms.push(3)
ms.push(7)
ms.push(2)
assert ms.get_min() == 2
ms.pop()
assert ms.get_min() == 3
print("PASS 05_stacks_queues/min_stack (py)")
