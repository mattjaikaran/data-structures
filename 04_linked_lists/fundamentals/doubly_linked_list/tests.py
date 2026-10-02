import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.doubly_linked_list.solution import DoublyLinkedList

dll = DoublyLinkedList()
dll.append_back(1)
dll.append_back(2)
dll.append_back(3)
dll.append_front(0)
assert list(dll) == [0, 1, 2, 3]
assert dll.remove_front() == 0
assert dll.remove_back() == 3
assert list(dll) == [1, 2]
assert len(dll) == 2
print("PASS 04_linked_lists/doubly_linked_list (py)")
