import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.merge_sorted.solution import merge_sorted

merged = merge_sorted(from_list([1, 3, 5]), from_list([2, 4, 6]))
assert to_list(merged) == [1, 2, 3, 4, 5, 6]
assert to_list(merge_sorted(None, from_list([1]))) == [1]
assert to_list(merge_sorted(from_list([1]), None)) == [1]
print("PASS 04_linked_lists/merge_sorted (py)")
