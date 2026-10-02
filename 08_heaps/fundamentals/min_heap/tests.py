import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.min_heap.solution import MinHeap
from fundamentals.max_heap.solution import MaxHeap

mnh = MinHeap()
for v in [5,2,8,1,9]: mnh.push(v)
assert mnh.peek()==1
assert mnh.pop()==1
assert mnh.peek()==2
mxh = MaxHeap()
for v in [5,2,8,1,9]: mxh.push(v)
assert mxh.peek()==9
assert mxh.pop()==9
assert mxh.peek()==8
duplicates = MinHeap()
for value in [3,-1,3,0,-1]:
    duplicates.push(value)
assert [duplicates.pop() for _ in range(5)] == [-1,-1,0,3,3]
assert len(duplicates) == 0
try:
    duplicates.pop()
except IndexError:
    pass
else:
    raise AssertionError('Empty heap must reject pop')
duplicates.push(9)
assert duplicates.peek() == 9 and duplicates.pop() == 9

print("PASS 08_heaps/min_heap (py)")
