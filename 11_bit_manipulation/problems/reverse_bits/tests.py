import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.reverse_bits.solution import reverse_bits

assert reverse_bits(0b00000010100101000001111010011100) == 964176192
print("PASS 11_bit_manipulation/reverse_bits (py)")
