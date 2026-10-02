import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.count_bits.solution import count_bits, number_of_1_bits

assert count_bits(0b1011) == 3
assert count_bits(0) == 0
assert number_of_1_bits(0b00000000000000000000000000001011) == 3
assert number_of_1_bits(0b11111111111111111111111111111101) == 31
print("PASS 11_bit_manipulation/count_bits (py)")
