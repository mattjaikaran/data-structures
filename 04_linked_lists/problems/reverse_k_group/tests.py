import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.reverse_k_group.solution import reverse_k_group

assert to_list(reverse_k_group(from_list([1, 2, 3, 4, 5]), 2)) == [2, 1, 4, 3, 5]
assert to_list(reverse_k_group(from_list([1, 2, 3, 4, 5]), 3)) == [3, 2, 1, 4, 5]
assert to_list(reverse_k_group(from_list([1, 2, 3, 4, 5]), 1)) == [1, 2, 3, 4, 5]
print("PASS 04_linked_lists/reverse_k_group (py)")
