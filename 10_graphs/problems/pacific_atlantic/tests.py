import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.pacific_atlantic.solution import pacific_atlantic

assert pacific_atlantic([[1]]) == [[0, 0]]
assert sorted(pacific_atlantic([[1, 2], [4, 3]])) == [[0, 1], [1, 0], [1, 1]]
print("PASS 10_graphs/pacific_atlantic (py)")
