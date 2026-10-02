import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.reorganize_string.solution import reorganize_string

rs = reorganize_string("aab")
assert len(rs)==3 and rs[0]!=rs[1] and rs[1]!=rs[2]
assert reorganize_string("aaab")==""
print("PASS 08_heaps/reorganize_string (py)")
