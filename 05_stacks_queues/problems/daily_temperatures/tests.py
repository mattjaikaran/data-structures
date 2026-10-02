import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.daily_temperatures.solution import daily_temperatures

assert daily_temperatures([73,74,75,71,69,72,76,73]) == [1,1,4,2,1,1,0,0]
assert daily_temperatures([30,40,50,60]) == [1,1,1,0]
print("PASS 05_stacks_queues/daily_temperatures (py)")
