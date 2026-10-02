import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.max_product.solution import max_product_subarray

assert max_product_subarray([2,3,-2,4]) == 6
assert max_product_subarray([-2,3,-4]) == 24
print("PASS 12_dynamic_programming/max_product (py)")
