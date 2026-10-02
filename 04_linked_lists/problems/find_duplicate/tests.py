import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_duplicate.solution import find_duplicate

assert find_duplicate([1, 3, 4, 2, 2]) == 2
assert find_duplicate([3, 1, 3, 4, 2]) == 3
print("PASS 04_linked_lists/find_duplicate (py)")
