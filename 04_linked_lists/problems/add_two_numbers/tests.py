import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.add_two_numbers.solution import add_two_numbers

assert to_list(add_two_numbers(from_list([2, 4, 3]), from_list([5, 6, 4]))) == [7, 0, 8]
assert to_list(add_two_numbers(from_list([0]), from_list([0]))) == [0]
assert to_list(add_two_numbers(from_list([9, 9, 9]), from_list([1]))) == [0, 0, 0, 1]
print("PASS 04_linked_lists/add_two_numbers (py)")
