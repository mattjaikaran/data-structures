import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.get_bit.solution import get_bit

assert get_bit(0b1010, 1) == 1
assert get_bit(0b1010, 0) == 0
print("PASS 11_bit_manipulation/get_bit (py)")
