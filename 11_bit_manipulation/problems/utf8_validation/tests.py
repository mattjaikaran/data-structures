import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.utf8_validation.solution import utf8_validation

assert utf8_validation([197, 130, 1])
assert not utf8_validation([235, 140, 4])
print("PASS 11_bit_manipulation/utf8_validation (py)")
