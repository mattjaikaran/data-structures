import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.word_search_ii.solution import word_search_ii

board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
found = set(word_search_ii(board, ["oath","pea","eat","rain"]))
assert "oath" in found and "eat" in found
print("PASS 09_tries/word_search_ii (py)")
