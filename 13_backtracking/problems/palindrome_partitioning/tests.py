import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.palindrome_partitioning.solution import palindrome_partitioning

pp = palindrome_partitioning("aab")
assert ["a","a","b"] in pp and ["aa","b"] in pp
print("PASS 13_backtracking/palindrome_partitioning (py)")
