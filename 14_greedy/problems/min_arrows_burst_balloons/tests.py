import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.min_arrows_burst_balloons.solution import min_arrows_burst_balloons

assert min_arrows_burst_balloons([[10,16],[2,8],[1,6],[7,12]]) == 2
print("PASS 14_greedy/min_arrows_burst_balloons (py)")
