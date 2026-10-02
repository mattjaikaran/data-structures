import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.n_queens.solution import n_queens

queens = n_queens(4)
assert len(queens) == 2
print("PASS 13_backtracking/n_queens (py)")
