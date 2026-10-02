import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.remove_nth_from_end.solution import remove_nth_from_end

assert to_list(remove_nth_from_end(from_list([1, 2, 3, 4, 5]), 2)) == [1, 2, 3, 5]
assert to_list(remove_nth_from_end(from_list([1, 2]), 1)) == [1]
assert to_list(remove_nth_from_end(from_list([1]), 1)) == []
print("PASS 04_linked_lists/remove_nth_from_end (py)")
