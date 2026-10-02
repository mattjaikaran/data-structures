import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.can_finish.solution import can_finish

assert can_finish(2,[[1,0]]) and not can_finish(2,[[1,0],[0,1]])
print("PASS 10_graphs/can_finish (py)")
