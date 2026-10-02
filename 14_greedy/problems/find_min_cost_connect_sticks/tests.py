import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_min_cost_connect_sticks.solution import find_min_cost_connect_sticks

assert find_min_cost_connect_sticks([2,4,3]) == 14
assert find_min_cost_connect_sticks([1,8,3,5]) == 30
print("PASS 14_greedy/find_min_cost_connect_sticks (py)")
