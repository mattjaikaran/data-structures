import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
import random
from problems.train_test_split.solution import train_test_split
x,y = [[i] for i in range(10)], [i*10 for i in range(10)]
state = random.getstate()
a,b,c,d = train_test_split(x,y,0.3,7)
assert (a,b,c,d) == train_test_split(x,y,0.3,7)
assert len(a) == 7 and len(b) == 3
assert {row[0] for row in a}.isdisjoint(row[0] for row in b)
assert sorted(row[0] for row in a+b) == list(range(10))
assert all(row[0]*10 == label for row,label in zip(a+b,c+d))
assert x == [[i] for i in range(10)] and y == [i*10 for i in range(10)]
assert random.getstate() == state
for features, labels, fraction in [([[1]],[1],0.5), (x,y,0), (x,y,1), (x,y[:-1],0.3)]:
    try:
        train_test_split(features,labels,fraction,7)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid split accepted')
print('PASS 15_machine_learning/train_test_split (py)')
