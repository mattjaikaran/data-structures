import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.max_product_subarray.solution import max_product_subarray

assert max_product_subarray([2, 3, -2, 4]) == 6
assert max_product_subarray([-2, 0, -1]) == 0
assert max_product_subarray([-2, 3, -4]) == 24
print("PASS 01_arrays/max_product_subarray (py)")
