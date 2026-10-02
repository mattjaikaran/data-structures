import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.string_compression.solution import string_compression

assert string_compression(['a','a','b','b','c','c','c'])==6
print("PASS 03_strings/string_compression (py)")
