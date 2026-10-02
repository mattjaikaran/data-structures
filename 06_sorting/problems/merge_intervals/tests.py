import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.merge_intervals.solution import merge_intervals_sorted

assert merge_intervals_sorted([[1,3],[2,6],[8,10],[15,18]]) == [[1,6],[8,10],[15,18]]
assert merge_intervals_sorted([[1,4],[4,5]]) == [[1,5]]
print("PASS 06_sorting/merge_intervals (py)")
