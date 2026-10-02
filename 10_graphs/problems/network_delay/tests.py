import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.network_delay.solution import network_delay

assert network_delay([[2,1,1],[2,3,1],[3,4,1]],4,2) == 2
print("PASS 10_graphs/network_delay (py)")
