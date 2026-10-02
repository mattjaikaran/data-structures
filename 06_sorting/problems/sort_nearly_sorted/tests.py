import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.sort_nearly_sorted.solution import sort_nearly_sorted

assert sort_nearly_sorted([2,1,4,3,6,5,8,7], 1) == [1,2,3,4,5,6,7,8]
assert sort_nearly_sorted([6,5,3,2,8,10,9], 3) == [2,3,5,6,8,9,10]
print("PASS 06_sorting/sort_nearly_sorted (py)")
