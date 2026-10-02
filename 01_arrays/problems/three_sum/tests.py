import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.three_sum.solution import three_sum

result = three_sum([-1, 0, 1, 2, -1, -4])
assert sorted(map(sorted, result)) == [[-1, -1, 2], [-1, 0, 1]]
assert three_sum([0, 0, 0]) == [[0, 0, 0]]
assert three_sum([1, 2, 3]) == []
print("PASS 01_arrays/three_sum (py)")
