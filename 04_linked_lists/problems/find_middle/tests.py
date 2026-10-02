import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_middle.solution import find_middle
from fundamentals.singly_linked_list.solution import from_list

assert find_middle(from_list([1, 2, 3, 4, 5])).val == 3
assert find_middle(from_list([1, 2, 3, 4])).val == 3
assert find_middle(from_list([1])).val == 1
print("PASS 04_linked_lists/find_middle (py)")
