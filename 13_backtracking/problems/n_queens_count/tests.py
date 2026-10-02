import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.n_queens_count.solution import n_queens_count

assert n_queens_count(8) == 92
print("PASS 13_backtracking/n_queens_count (py)")
