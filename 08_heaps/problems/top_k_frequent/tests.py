import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.top_k_frequent.solution import top_k_frequent

assert set(top_k_frequent([1,1,1,2,2,3],2))=={1,2}
print("PASS 08_heaps/top_k_frequent (py)")
