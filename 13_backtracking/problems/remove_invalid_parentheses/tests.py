import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.remove_invalid_parentheses.solution import remove_invalid_parentheses

rip = remove_invalid_parentheses("()())()")
assert "(())()" in rip or "()(())" in rip or "()()()" in rip
print("PASS 13_backtracking/remove_invalid_parentheses (py)")
