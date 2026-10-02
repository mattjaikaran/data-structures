import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.permutations.solution import permutations

perms = permutations([1,2,3])
assert len(perms) == 6 and [1,2,3] in perms and [3,2,1] in perms
print("PASS 13_backtracking/permutations (py)")
