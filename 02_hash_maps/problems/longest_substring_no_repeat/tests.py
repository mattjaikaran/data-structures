import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_substring_no_repeat.solution import longest_substring_no_repeat

assert longest_substring_no_repeat("abcabcbb")==3
assert longest_substring_no_repeat("bbbbb")==1
assert longest_substring_no_repeat("pwwkew")==3
print("PASS 02_hash_maps/longest_substring_no_repeat (py)")
