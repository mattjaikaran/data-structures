import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.can_finish.solution import can_finish

assert can_finish(2,[[1,0]]) and not can_finish(2,[[1,0],[0,1]])
assert can_finish(4,[[1,0],[2,1],[3,2]])
assert can_finish(3,[[1,0],[1,0]])
assert not can_finish(1,[[0,0]])
assert not can_finish(5,[[1,0],[3,2],[2,3]])
assert can_finish(3,[])

print("PASS 10_graphs/can_finish (py)")
