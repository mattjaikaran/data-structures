import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.k_means.solution import k_means
points,initial = [[0],[2],[10],[12]], [[0],[12]]
centers,labels = k_means(points,initial,20,1e-8)
assert centers == [[1],[11]] and labels == [0,0,1,1]
assert points == [[0],[2],[10],[12]] and initial == [[0],[12]]
assert k_means([[0],[2]],[[0],[0]],10,1e-8)[0] == [[2],[0]]
centers,labels = k_means([[0],[4],[5],[6]],[[0],[10]],1,0)
assert labels == [0,0,1,1], 'Return labels for updated centers, not stale assignments'
assert centers == [[3],[6]]
print('PASS 15_machine_learning/k_means (py)')
