import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.k_nearest_neighbors.solution import knn_predict
assert knn_predict([[0,0],[1,1],[9,9]],[0,0,1],[0.5,0.5],2) == 0
assert knn_predict([[-1],[1]],[9,3],[0],1) == 9
assert knn_predict([[-1],[1]],[9,3],[0],2) == 3
try:
    knn_predict([[1,2]],[0],[1],1)
except ValueError:
    pass
else:
    raise AssertionError('Wrong query dimension accepted')
print('PASS 15_machine_learning/k_nearest_neighbors (py)')
