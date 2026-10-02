import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.can_complete_circuit.solution import can_complete_circuit

assert can_complete_circuit([1,2,3,4,5],[3,4,5,1,2]) == 3
assert can_complete_circuit([2,3,4],[3,4,3]) == -1
print("PASS 14_greedy/can_complete_circuit (py)")
