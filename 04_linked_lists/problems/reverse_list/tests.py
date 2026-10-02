import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.reverse_list.solution import reverse_list

assert to_list(reverse_list(from_list([1, 2, 3, 4, 5]))) == [5, 4, 3, 2, 1]
assert to_list(reverse_list(from_list([1]))) == [1]
assert reverse_list(None) is None
print("PASS 04_linked_lists/reverse_list (py)")
