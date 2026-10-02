import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.container_most_water.solution import container_most_water

assert container_most_water([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
assert container_most_water([1, 1]) == 1
print("PASS 01_arrays/container_most_water (py)")
