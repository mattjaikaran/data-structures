import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.stone_game.solution import stone_game

assert stone_game([5, 3, 4, 5]) is True
assert stone_game([3, 7, 2, 3]) is True
print("PASS 12_dynamic_programming/stone_game (py)")
