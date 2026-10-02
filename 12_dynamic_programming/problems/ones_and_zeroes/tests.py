import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.ones_and_zeroes.solution import ones_and_zeroes

assert ones_and_zeroes(["10", "0001", "111001", "1", "0"], 5, 3) == 4
assert ones_and_zeroes(["10"], 2, 2) == 1
print("PASS 12_dynamic_programming/ones_and_zeroes (py)")
