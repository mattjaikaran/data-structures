import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.combination_sum_ii.solution import combination_sum_ii

cs2 = combination_sum_ii([10,1,2,7,6,1,5], 8)
assert [1,1,6] in cs2 and [1,2,5] in cs2 and [1,7] in cs2 and [2,6] in cs2
print("PASS 13_backtracking/combination_sum_ii (py)")
