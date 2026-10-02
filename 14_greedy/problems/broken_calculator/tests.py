import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.broken_calculator.solution import broken_calculator

assert broken_calculator(2, 3) == 2
assert broken_calculator(5, 8) == 2
print("PASS 14_greedy/broken_calculator (py)")
