import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.largest_number.solution import largest_number

assert largest_number([10,2]) == "210"
assert largest_number([3,30,34,5,9]) == "9534330"
print("PASS 14_greedy/largest_number (py)")
