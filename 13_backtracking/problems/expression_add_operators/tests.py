import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.expression_add_operators.solution import expression_add_operators

ops = expression_add_operators("123", 6)
assert "1+2+3" in ops and "1*2*3" in ops
print("PASS 13_backtracking/expression_add_operators (py)")
