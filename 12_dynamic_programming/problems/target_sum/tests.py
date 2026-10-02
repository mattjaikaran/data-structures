import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.target_sum.solution import target_sum

assert target_sum([1,1,1,1,1], 3) == 5
assert target_sum([1], 1) == 1
print("PASS 12_dynamic_programming/target_sum (py)")
