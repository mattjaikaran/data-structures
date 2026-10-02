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
print("PASS 08_heaps/max_heap (py)")
