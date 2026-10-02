import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.sum_of_two_integers.solution import sum_of_two_integers

assert sum_of_two_integers(1, 2) == 3
assert sum_of_two_integers(-2, 3) == 1
print("PASS 11_bit_manipulation/sum_of_two_integers (py)")
