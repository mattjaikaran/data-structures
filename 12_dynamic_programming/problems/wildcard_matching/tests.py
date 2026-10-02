import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.wildcard_matching.solution import wildcard_matching

assert wildcard_matching("aa","*")
assert not wildcard_matching("cb","?a")
assert wildcard_matching("adceb","*a*b")
print("PASS 12_dynamic_programming/wildcard_matching (py)")
