import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.standard_scaler.solution import StandardScaler
training = [[1,7],[3,7]]
scaler = StandardScaler.fit(training)
assert scaler.transform(training) == [[-1,0],[1,0]]
assert scaler.transform([[5,9]]) == [[3,2]], 'Held-out data must not refit statistics'
assert training == [[1,7],[3,7]]
assert scaler.means == (2,7) and scaler.scales == (1,1)
try:
    scaler.transform([[1]])
except ValueError:
    pass
else:
    raise AssertionError('Wrong feature dimension accepted')
assert scaler.transform([]) == []
for rows in [[],[[]],[[1],[2,3]]]:
    try:
        StandardScaler.fit(rows)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid training shape accepted')

print('PASS 15_machine_learning/standard_scaler (py)')
