import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.basic_calculator.solution import basic_calculator

assert basic_calculator("1 + 1") == 2
assert basic_calculator(" 2-1 + 2 ") == 3
assert basic_calculator("(1+(4+5+2)-3)+(6+8)") == 23
print("PASS 05_stacks_queues/basic_calculator (py)")
