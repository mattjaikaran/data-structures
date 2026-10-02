import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.group_anagrams.solution import group_anagrams

groups = group_anagrams(["eat","tea","tan","ate","nat","bat"])
assert len(groups)==3 and any(sorted(g)==['ate','eat','tea'] for g in groups)
print("PASS 02_hash_maps/group_anagrams (py)")
