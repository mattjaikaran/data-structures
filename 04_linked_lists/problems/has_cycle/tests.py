import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, SNode
from problems.has_cycle.solution import has_cycle

assert not has_cycle(from_list([1, 2, 3]))
n1, n2, n3 = SNode(1), SNode(2), SNode(3)
n1.next = n2
n2.next = n3
n3.next = n2
assert has_cycle(n1)
assert not has_cycle(None)
print("PASS 04_linked_lists/has_cycle (py)")
