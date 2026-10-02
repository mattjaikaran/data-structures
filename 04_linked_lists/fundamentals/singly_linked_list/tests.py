import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import SinglyLinkedList


ll = SinglyLinkedList()
for v in [1, 2, 3, 4, 5]:
    ll.append(v)
assert ll.to_list() == [1, 2, 3, 4, 5]
ll.prepend(0)
assert ll.to_list() == [0, 1, 2, 3, 4, 5]
assert ll.pop_front() == 0
assert ll.to_list() == [1, 2, 3, 4, 5]
ll.remove_value(3)
assert ll.to_list() == [1, 2, 4, 5]
ll.reverse()
assert ll.to_list() == [5, 4, 2, 1]
assert len(ll) == 4
print('PASS 04_linked_lists/singly_linked_list (py)')
