import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.cosine_retrieval.solution import cosine_similarity, rank_vectors
vectors = [[1,0],[0,1],[-1,0],[2,0],[0,0]]
assert rank_vectors([1,0],vectors,5) == [(0,1),(3,1),(1,0),(4,0),(2,-1)]
assert rank_vectors([1,0],vectors,2) == [(0,1),(3,1)]
assert cosine_similarity([1e200,0],[1e200,0]) == 1
assert cosine_similarity([0,0],[1,0]) == 0
try:
    rank_vectors([1],vectors,1)
except ValueError:
    pass
else:
    raise AssertionError('Wrong embedding dimension accepted')
print('PASS 15_machine_learning/cosine_retrieval (py)')
