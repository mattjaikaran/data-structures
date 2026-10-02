import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.meeting_rooms_ii.solution import meeting_rooms_ii

assert meeting_rooms_ii([[0,30],[5,10],[15,20]]) == 2
assert meeting_rooms_ii([[7,10],[2,4]]) == 1
print("PASS 14_greedy/meeting_rooms_ii (py)")
