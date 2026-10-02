import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.subsets_with_dup.solution import subsets_with_dup

assert len(subsets_with_dup([1,2,2])) == 6
print("PASS 13_backtracking/subsets_with_dup (py)")
