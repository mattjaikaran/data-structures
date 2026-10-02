import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.length_of_lis.solution import longest_increasing_subsequence

assert longest_increasing_subsequence([10,9,2,5,3,7,101,18]) == 4
assert longest_increasing_subsequence([0,1,0,3,2,3]) == 4
print("PASS 12_dynamic_programming/length_of_lis (py)")
