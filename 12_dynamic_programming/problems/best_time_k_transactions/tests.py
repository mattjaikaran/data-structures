import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.best_time_k_transactions.solution import best_time_k_transactions

assert best_time_k_transactions(2, [3,2,6,5,0,3]) == 7
print("PASS 12_dynamic_programming/best_time_k_transactions (py)")
