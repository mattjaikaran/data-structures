import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.count_and_say.solution import count_and_say

assert count_and_say(1) == "1"
assert count_and_say(5) == "111221"
print("PASS 03_strings/count_and_say (py)")
