import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.subsets.solution import subsets

assert len(subsets([1,2,3])) == 8
assert [] in subsets([1,2,3]) and [1,2,3] in subsets([1,2,3])
print("PASS 13_backtracking/subsets (py)")
