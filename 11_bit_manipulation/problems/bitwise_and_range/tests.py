import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.bitwise_and_range.solution import bitwise_and_range

assert bitwise_and_range(5, 7) == 4
assert bitwise_and_range(1, 2147483647) == 0
print("PASS 11_bit_manipulation/bitwise_and_range (py)")
