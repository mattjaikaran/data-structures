import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.sort_list.solution import sort_list

assert to_list(sort_list(from_list([4, 2, 1, 3]))) == [1, 2, 3, 4]
assert to_list(sort_list(from_list([-1, 5, 3, 4, 0]))) == [-1, 0, 3, 4, 5]
assert to_list(sort_list(from_list([1]))) == [1]
print("PASS 04_linked_lists/sort_list (py)")
