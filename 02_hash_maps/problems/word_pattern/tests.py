import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.word_pattern.solution import word_pattern

assert word_pattern("abba","dog cat cat dog")
assert not word_pattern("abba","dog cat cat fish")
print("PASS 02_hash_maps/word_pattern (py)")
