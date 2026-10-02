import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.kmp_search.solution import kmp_search

assert kmp_search("abcabcabc","abc")==[0,3,6]
assert kmp_search("aabaabaab","aab")==[0,3,6]
assert kmp_search("hello","ll")==[2]
print("PASS 03_strings/kmp_search (py)")
