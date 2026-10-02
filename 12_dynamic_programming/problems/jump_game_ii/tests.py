import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.jump_game_ii.solution import jump_game_ii

assert jump_game_ii([2,3,1,1,4]) == 2
assert jump_game_ii([2,3,0,1,4]) == 2
print("PASS 12_dynamic_programming/jump_game_ii (py)")
