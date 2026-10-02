import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.largest_rectangle_histogram.solution import largest_rectangle_histogram

assert largest_rectangle_histogram([2, 1, 5, 6, 2, 3]) == 10
assert largest_rectangle_histogram([2, 4]) == 4
assert largest_rectangle_histogram([1]) == 1
print("PASS 01_arrays/largest_rectangle_histogram (py)")
