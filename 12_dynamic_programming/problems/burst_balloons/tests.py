import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.burst_balloons.solution import burst_balloons

assert burst_balloons([3,1,5,8]) == 167
assert burst_balloons([1,5]) == 10
print("PASS 12_dynamic_programming/burst_balloons (py)")
