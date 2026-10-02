import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_all_anagrams.solution import find_all_anagrams

assert find_all_anagrams("cbaebabacd","abc")==[0,6]
assert find_all_anagrams("abab","ab")==[0,1,2]
print("PASS 02_hash_maps/find_all_anagrams (py)")
