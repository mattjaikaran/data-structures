import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.graph.solution import Graph

g = Graph()
for u,v in [(0,1),(0,2),(1,3),(2,4)]: g.add_edge(u,v)
assert set(g.bfs(0)) == {0,1,2,3,4}
assert g.bfs(0)[0] == 0
assert set(g.dfs(0)) == {0,1,2,3,4}
assert g.shortest_path_bfs(0,4) == [0,2,4]
wg = Graph()
for u,v,w in [(0,1,4),(0,2,1),(2,1,2),(1,3,1),(2,3,5)]: wg.add_edge(u,v,w)
dist = wg.dijkstra(0)
assert dist[3] == 4, f"Expected 4 got {dist[3]}"
dag = Graph(directed=True)
for u,v in [(5,2),(5,0),(4,0),(4,1),(2,3),(3,1)]: dag.add_edge(u,v)
order = dag.topological_sort()
assert len(order) == 6
print("PASS 10_graphs/graph (py)")
