import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.min_window_substring.solution import min_window_substring

assert min_window_substring("ADOBECODEBANC","ABC")=="BANC"
assert min_window_substring("a","a")=="a"
assert min_window_substring("a","b")==""
print("PASS 02_hash_maps/min_window_substring (py)")
