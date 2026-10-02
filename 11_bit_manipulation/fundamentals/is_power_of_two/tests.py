import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.is_power_of_two.solution import is_power_of_two

assert is_power_of_two(16) and is_power_of_two(1)
assert not is_power_of_two(0) and not is_power_of_two(6)
print("PASS 11_bit_manipulation/is_power_of_two (py)")
