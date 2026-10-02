import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list
from problems.detect_cycle_node.solution import detect_cycle_node

head = from_list([1, 2, 3])
entry = head.next
head.next.next.next = entry
assert detect_cycle_node(head) is entry
assert detect_cycle_node(from_list([1, 2])) is None
print("PASS 04_linked_lists/detect_cycle_node (py)")
