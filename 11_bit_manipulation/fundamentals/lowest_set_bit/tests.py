import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.lowest_set_bit.solution import lowest_set_bit

assert lowest_set_bit(0) == 0
assert lowest_set_bit(12) == 4
assert lowest_set_bit(8) == 8
print("PASS 11_bit_manipulation/lowest_set_bit (py)")
