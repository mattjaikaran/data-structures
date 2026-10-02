import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.combination_sum.solution import combination_sum

cs = combination_sum([2,3,6,7], 7)
assert [7] in cs and [2,2,3] in cs and len(cs) == 2
print("PASS 13_backtracking/combination_sum (py)")
