import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.power_of_four.solution import power_of_four

assert power_of_four(16) and power_of_four(1)
assert not power_of_four(5) and not power_of_four(8)
print("PASS 11_bit_manipulation/power_of_four (py)")
