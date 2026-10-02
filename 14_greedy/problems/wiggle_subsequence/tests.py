import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.wiggle_subsequence.solution import wiggle_subsequence

assert wiggle_subsequence([1,7,4,9,2,5]) == 6
assert wiggle_subsequence([1,2,3,4,5,6,7,8,9]) == 2
print("PASS 14_greedy/wiggle_subsequence (py)")
