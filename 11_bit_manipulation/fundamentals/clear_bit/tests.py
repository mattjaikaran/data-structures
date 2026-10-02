import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.clear_bit.solution import clear_bit

assert clear_bit(0b1011, 0) == 0b1010
print("PASS 11_bit_manipulation/clear_bit (py)")
