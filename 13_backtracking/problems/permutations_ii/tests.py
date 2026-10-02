import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.permutations_ii.solution import permutations_ii

perms2 = permutations_ii([1,1,2])
assert len(perms2) == 3
print("PASS 13_backtracking/permutations_ii (py)")
