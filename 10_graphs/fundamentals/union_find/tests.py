import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.union_find.solution import UnionFind

uf = UnionFind(5)
uf.union(0,1)
uf.union(2,3)
assert uf.connected(0,1) and not uf.connected(0,2)
assert uf.components == 3
print("PASS 10_graphs/union_find (py)")
