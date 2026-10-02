import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.rotting_oranges.solution import rotting_oranges
grid = [[2,1,1],[1,1,0],[0,1,1]]
assert rotting_oranges(grid) == 4
assert grid == [[2,2,2],[2,2,0],[0,2,2]]
assert rotting_oranges([[2,1,1,1,2]]) == 2
assert rotting_oranges([[2,0,1]]) == -1
assert rotting_oranges([[1]]) == -1
assert rotting_oranges([[0,2]]) == 0
assert rotting_oranges([]) == 0
print('PASS 10_graphs/rotting_oranges (py)')
