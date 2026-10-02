import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.max_subarray.solution import max_subarray

assert max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
assert max_subarray([-1, -2, -3]) == -1
assert max_subarray([1]) == 1
print("PASS 01_arrays/max_subarray (py)")
