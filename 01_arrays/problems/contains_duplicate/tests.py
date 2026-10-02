import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.contains_duplicate.solution import contains_duplicate

assert contains_duplicate([1, 2, 1])
assert not contains_duplicate([1, 2, 3])
assert not contains_duplicate([])
print("PASS 01_arrays/contains_duplicate (py)")
