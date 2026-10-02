import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.gradient_check.solution import finite_difference
point = [2.,-3.]
gradient = finite_difference(lambda x: x[0]**2 + 3*x[1]**2 + x[0]*x[1],point,1e-5)
assert all(isclose(a,b,abs_tol=1e-7) for a,b in zip(gradient,[1,-16]))
assert point == [2,-3]
try:
    finite_difference(lambda x: sum(x),[1],0)
except ValueError:
    pass
else:
    raise AssertionError('Zero difference step accepted')
print('PASS 15_machine_learning/gradient_check (py)')
