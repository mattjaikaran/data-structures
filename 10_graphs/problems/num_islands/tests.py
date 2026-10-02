import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.num_islands.solution import num_islands

grid = [["1","1","0"],["0","1","0"],["0","0","1"]]
assert num_islands(grid) == 2
print("PASS 10_graphs/num_islands (py)")
