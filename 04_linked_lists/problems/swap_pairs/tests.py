import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.swap_pairs.solution import swap_pairs

assert to_list(swap_pairs(from_list([1, 2, 3, 4]))) == [2, 1, 4, 3]
assert to_list(swap_pairs(from_list([1, 2, 3]))) == [2, 1, 3]
assert to_list(swap_pairs(from_list([1]))) == [1]
print("PASS 04_linked_lists/swap_pairs (py)")
