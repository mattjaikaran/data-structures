import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.merge_k_lists.solution import merge_k_sorted

k_lists = [from_list([1, 4, 5]), from_list([1, 3, 4]), from_list([2, 6])]
assert to_list(merge_k_sorted(k_lists)) == [1, 1, 2, 3, 4, 4, 5, 6]
assert merge_k_sorted([]) is None
print("PASS 04_linked_lists/merge_k_lists (py)")
