import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.subarray_sum_k.solution import subarray_sum_k

assert subarray_sum_k([1, 1, 1], 2) == 2
assert subarray_sum_k([1, 2, 3], 3) == 2
assert subarray_sum_k([-1, -1, 1], 0) == 1
print("PASS 01_arrays/subarray_sum_k (py)")
