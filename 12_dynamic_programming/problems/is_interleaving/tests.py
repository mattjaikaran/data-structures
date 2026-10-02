import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_interleaving.solution import is_interleaving

assert is_interleaving("aab","axy","aaxaby")
assert not is_interleaving("aabcc","dbbca","aadbbbaccc")
assert is_interleaving("aabcc","dbbca","aadbbcbcac")
print("PASS 12_dynamic_programming/is_interleaving (py)")
