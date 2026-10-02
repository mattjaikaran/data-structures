import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.sliding_window_max_sum.solution import sliding_window_max_sum

assert sliding_window_max_sum([2, 1, 5, 1, 3, 2], 3) == 9
assert sliding_window_max_sum([1, 2], 1) == 2
print("PASS 01_arrays/sliding_window_max_sum (py)")
