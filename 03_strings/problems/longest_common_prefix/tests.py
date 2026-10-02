import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_common_prefix.solution import longest_common_prefix

assert longest_common_prefix(["flower","flow","flight"])=="fl"
assert longest_common_prefix(["dog","racecar","car"])==""
print("PASS 03_strings/longest_common_prefix (py)")
