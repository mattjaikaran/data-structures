import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_common_subsequence.solution import longest_common_subsequence

assert longest_common_subsequence("abcde","ace") == 3
assert longest_common_subsequence("abc","abc") == 3
assert longest_common_subsequence("abc","def") == 0
print("PASS 12_dynamic_programming/longest_common_subsequence (py)")
