import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.reorder_list.solution import reorder_list

h = from_list([1, 2, 3, 4, 5])
reorder_list(h)
assert to_list(h) == [1, 5, 2, 4, 3]
h2 = from_list([1, 2, 3, 4])
reorder_list(h2)
assert to_list(h2) == [1, 4, 2, 3]
print("PASS 04_linked_lists/reorder_list (py)")
