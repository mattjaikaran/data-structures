import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.manacher.solution import manacher

assert manacher("babad") in ["bab","aba"]
assert manacher("cbbd")=="bb"
assert manacher("racecar")=="racecar"
print("PASS 03_strings/manacher (py)")
