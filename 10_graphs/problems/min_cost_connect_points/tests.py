import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.min_cost_connect_points.solution import min_cost_connect_points

assert min_cost_connect_points([[0,0],[2,2],[3,10],[5,2],[7,0]]) == 20
print("PASS 10_graphs/min_cost_connect_points (py)")
