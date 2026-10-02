import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_kth_largest_stream.solution import find_kth_largest_stream

assert find_kth_largest_stream([4, 5, 8, 2], 3) == [-1, -1, 4, 4]
assert find_kth_largest_stream([2, 2, 1], 2) == [-1, 2, 2]
print("PASS 08_heaps/find_kth_largest_stream (py)")
