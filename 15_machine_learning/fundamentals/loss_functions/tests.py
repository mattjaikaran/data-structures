import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from math import inf, log
from fundamentals.loss_functions.solution import mean_squared_error, binary_cross_entropy
assert mean_squared_error([1,3],[2,1]) == 2.5
assert isclose(binary_cross_entropy([1,0],[0.8,0.2]),-log(0.8))
assert binary_cross_entropy([1,0],[1,0]) == 0
assert binary_cross_entropy([1],[0]) == inf
assert binary_cross_entropy([0],[1]) == inf
for labels,probs in [([],[]),([1],[0.5,0.5]),([2],[0.5]),([0],[1.1])]:
    try:
        binary_cross_entropy(labels,probs)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid loss inputs accepted')
print('PASS 15_machine_learning/loss_functions (py)')
