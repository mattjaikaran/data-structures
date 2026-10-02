import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.sliding_window_maximum.solution import sliding_window_maximum

assert sliding_window_maximum([1,3,-1,-3,5,3,6,7], 3) == [3,3,5,5,6,7]
assert sliding_window_maximum([1], 1) == [1]
print("PASS 05_stacks_queues/sliding_window_maximum (py)")
