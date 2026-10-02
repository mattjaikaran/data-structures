import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.remove_duplicates.solution import remove_duplicates

assert to_list(remove_duplicates(from_list([1, 1, 2, 3, 3]))) == [1, 2, 3]
assert to_list(remove_duplicates(from_list([1, 1, 1]))) == [1]
print("PASS 04_linked_lists/remove_duplicates (py)")
