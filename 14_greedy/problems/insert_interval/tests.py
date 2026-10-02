import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.insert_interval.solution import insert_interval

assert insert_interval([[1,3],[6,9]], [2,5]) == [[1,5],[6,9]]
assert insert_interval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) == [[1,2],[3,10],[12,16]]
print("PASS 14_greedy/insert_interval (py)")
