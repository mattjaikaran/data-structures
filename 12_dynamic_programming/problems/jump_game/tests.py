import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.jump_game.solution import jump_game

assert jump_game([2,3,1,1,4]) and not jump_game([3,2,1,0,4])
print("PASS 12_dynamic_programming/jump_game (py)")
