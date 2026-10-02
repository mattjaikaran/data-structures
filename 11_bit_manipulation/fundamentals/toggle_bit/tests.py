import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.toggle_bit.solution import toggle_bit

assert toggle_bit(0b1010, 0) == 0b1011
print("PASS 11_bit_manipulation/toggle_bit (py)")
