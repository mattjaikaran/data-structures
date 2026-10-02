import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.product_except_self.solution import product_except_self

assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
assert product_except_self([0, 1]) == [1, 0]
print("PASS 01_arrays/product_except_self (py)")
