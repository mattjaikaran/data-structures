import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.word_search.solution import word_search

grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
assert word_search([row[:] for row in grid], "ABCCED")
assert not word_search([row[:] for row in grid], "ABCB")
print("PASS 13_backtracking/word_search (py)")
