import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.k_closest_points.solution import k_closest_points

pts = [[1,3],[-2,2],[3,4],[-1,-1]]
closest = k_closest_points(pts,2)
assert len(closest)==2 and [-2,2] in closest and [-1,-1] in closest
print("PASS 08_heaps/k_closest_points (py)")
