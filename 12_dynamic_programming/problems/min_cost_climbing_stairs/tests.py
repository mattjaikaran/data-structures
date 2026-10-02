import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.min_cost_climbing_stairs.solution import min_cost_climbing_stairs

assert min_cost_climbing_stairs([10, 15, 20]) == 15
assert min_cost_climbing_stairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) == 6
print("PASS 12_dynamic_programming/min_cost_climbing_stairs (py)")
