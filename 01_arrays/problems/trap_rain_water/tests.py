import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.trap_rain_water.solution import trap_rain_water

assert trap_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6
assert trap_rain_water([4, 2, 0, 3, 2, 5]) == 9
assert trap_rain_water([3, 0, 3]) == 3
print("PASS 01_arrays/trap_rain_water (py)")
