import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_anagram.solution import is_anagram

assert is_anagram("anagram","nagaram") and not is_anagram("rat","car")
print("PASS 03_strings/is_anagram (py)")
