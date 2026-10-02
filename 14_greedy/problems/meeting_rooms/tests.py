import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.meeting_rooms.solution import meeting_rooms

assert meeting_rooms([[0,30],[5,10],[15,20]]) == False
assert meeting_rooms([[7,10],[2,4]]) == True
print("PASS 14_greedy/meeting_rooms (py)")
