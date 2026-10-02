import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.loss_functions.solution import binary_cross_entropy
from problems.logistic_regression.solution import sigmoid, fit_logistic_regression
assert sigmoid(-1000) == 0 and sigmoid(1000) == 1
xs,ys = [-3,-2,-1,1,2,3], [0,0,0,1,1,1]
model = fit_logistic_regression(xs,ys,0.1,800)
assert [model.predict(x) for x in [-0.5,0.5]] == [0,1]
assert binary_cross_entropy(ys,[model.probability(x) for x in xs]) < 0.03
try:
    fit_logistic_regression([1],[2])
except ValueError:
    pass
else:
    raise AssertionError('Nonbinary label accepted')
print('PASS 15_machine_learning/logistic_regression (py)')
