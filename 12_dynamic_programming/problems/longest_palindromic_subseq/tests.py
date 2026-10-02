import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_palindromic_subseq.solution import longest_palindromic_subseq

assert longest_palindromic_subseq("bbbab") == 4
assert longest_palindromic_subseq("cbbd") == 2
print("PASS 12_dynamic_programming/longest_palindromic_subseq (py)")
