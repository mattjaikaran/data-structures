import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.min_path_sum.solution import min_path_sum

assert min_path_sum([[1,3,1],[1,5,1],[4,2,1]]) == 7
print("PASS 12_dynamic_programming/min_path_sum (py)")
