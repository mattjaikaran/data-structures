import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.combinations.solution import combinations

assert len(combinations(4,2)) == 6
assert [1,2] in combinations(4,2)
print("PASS 13_backtracking/combinations (py)")
