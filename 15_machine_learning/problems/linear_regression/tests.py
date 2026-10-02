import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.loss_functions.solution import mean_squared_error
from problems.linear_regression.solution import fit_linear_regression
xs,ys = [-2,-1,0,1,2], [-4,-1,2,5,8]
model = fit_linear_regression(xs,ys,0.05,1000)
assert isclose(model.slope,3,abs_tol=1e-7) and isclose(model.bias,2,abs_tol=1e-7)
assert isclose(model.predict(5),17,abs_tol=1e-6)
assert mean_squared_error(ys,[model.predict(x) for x in xs]) < 1e-12
assert xs == [-2,-1,0,1,2] and ys == [-4,-1,2,5,8]
print('PASS 15_machine_learning/linear_regression (py)')
