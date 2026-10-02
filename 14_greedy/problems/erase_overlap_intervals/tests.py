import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.erase_overlap_intervals.solution import erase_overlap_intervals

assert erase_overlap_intervals([[1,2],[2,3],[3,4],[1,3]]) == 1
assert erase_overlap_intervals([[1,2],[1,2],[1,2]]) == 2
print("PASS 14_greedy/erase_overlap_intervals (py)")
