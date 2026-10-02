import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_palindromic_substring.solution import longest_palindromic_substring

assert longest_palindromic_substring("babad") in ["bab","aba"]
assert longest_palindromic_substring("cbbd") == "bb"
print("PASS 12_dynamic_programming/longest_palindromic_substring (py)")
