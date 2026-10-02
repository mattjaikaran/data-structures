import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.first_unique_char.solution import first_unique_char

assert first_unique_char("leetcode")==0
assert first_unique_char("loveleetcode")==2
assert first_unique_char("aabb")==-1
print("PASS 02_hash_maps/first_unique_char (py)")
