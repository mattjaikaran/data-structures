import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.prefix_sum.solution import prefix_sum

p = prefix_sum([1, 2, 3, 4, 5])
assert p[3 + 1] - p[1] == 9
assert p[5] == 15
print("PASS 01_arrays/prefix_sum (py)")
