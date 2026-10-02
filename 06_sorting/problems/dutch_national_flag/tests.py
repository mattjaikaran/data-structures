import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.dutch_national_flag.solution import dutch_national_flag

assert dutch_national_flag([2,0,2,1,1,0]) == [0,0,1,1,2,2]
assert dutch_national_flag([0]) == [0]
print("PASS 06_sorting/dutch_national_flag (py)")
