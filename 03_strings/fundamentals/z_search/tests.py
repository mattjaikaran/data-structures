import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.z_search.solution import z_search

assert z_search("abcabcabc","abc")==[0,3,6]
assert z_search("aaaa","aa")==[0,1,2]
print("PASS 03_strings/z_search (py)")
