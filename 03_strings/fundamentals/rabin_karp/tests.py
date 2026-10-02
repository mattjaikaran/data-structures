import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.rabin_karp.solution import rabin_karp

assert rabin_karp("ababa", "aba") == [0, 2]
assert rabin_karp("aaaa", "aa") == [0, 1, 2]
assert rabin_karp("abc", "z") == []
print("PASS 03_strings/rabin_karp (py)")
