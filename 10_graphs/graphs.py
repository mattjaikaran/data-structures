"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRAPHS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Graph = vertices + edges.  Adjacency list: O(V+E) space.
BFS → shortest path (unweighted). DFS → cycle, topo, components.
Dijkstra → shortest path weighted (non-negative edges).
Union-Find → O(α) disjoint sets, cycle detection, MST.
"""

# ┌─────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                           │
# ├─────────────────────────────────────────────┤
# │ 1. Graph class                              │
# │ 2. UnionFind class                          │
# │ 3. Problems                                 │
# │    - num_islands                 (LC #200) 🟡│
# │    - can_finish                  (LC #207) 🟡│
# │    - find_order                   (LC #210) 🟡│
# │    - pacific_atlantic            (LC #417) 🟡│
# │    - network_delay                (LC #743) 🟡│
# │    - min_cost_connect_points     (LC #1584) 🟡│
# │    - word_ladder                 (LC #127) 🔴│
# │    - clone_graph                 (LC #133) 🟡│
# │ 4. Tests                                    │
# └─────────────────────────────────────────────┘

from collections import defaultdict, deque
import heapq

# ══════════════════════════════════════
# ── Graph class ──────────────────────
# ══════════════════════════════════════

class Graph:
    def __init__(self, directed=False):
        self.adj = defaultdict(list)
        self.directed = directed

    def add_edge(self, u, v, w=1):
        self.adj[u].append((v, w))
        if not self.directed: self.adj[v].append((u, w))

    def bfs(self, src):
        visited, order, q = {src}, [], deque([src])
        while q:
            n = q.popleft(); order.append(n)
            for nb, _ in self.adj[n]:
                if nb not in visited: visited.add(nb); q.append(nb)
        return order

    def dfs(self, src):
        visited, order = set(), []
        def _dfs(n):
            visited.add(n); order.append(n)
            for nb, _ in self.adj[n]:
                if nb not in visited: _dfs(nb)
        _dfs(src); return order

    def shortest_path_bfs(self, src, dst):
        """Unweighted shortest path via BFS."""
        parent, visited, q = {src: None}, {src}, deque([src])
        while q:
            n = q.popleft()
            if n == dst:
                path = []
                while n is not None: path.append(n); n = parent[n]
                return path[::-1]
            for nb, _ in self.adj[n]:
                if nb not in visited: visited.add(nb); parent[nb] = n; q.append(nb)
        return []

    def dijkstra(self, src):
        dist = {src: 0}
        heap = [(0, src)]
        while heap:
            d, u = heapq.heappop(heap)
            if d > dist.get(u, float('inf')): continue
            for v, w in self.adj[u]:
                nd = d + w
                if nd < dist.get(v, float('inf')): dist[v] = nd; heapq.heappush(heap, (nd, v))
        return dist

    def topological_sort(self):
        """Kahn's BFS-based topological sort. Returns [] if cycle detected."""
        indegree = defaultdict(int)
        for u in self.adj:
            for v, _ in self.adj[u]: indegree[v] += 1
        q = deque(u for u in self.adj if indegree[u] == 0)
        order = []
        while q:
            n = q.popleft(); order.append(n)
            for nb, _ in self.adj[n]:
                indegree[nb] -= 1
                if indegree[nb] == 0: q.append(nb)
        return order if len(order) == len(self.adj) else []

    def has_cycle_directed(self):
        WHITE, GRAY, BLACK = 0, 1, 2
        color = {n: WHITE for n in self.adj}
        def dfs(n):
            color[n] = GRAY
            for nb, _ in self.adj[n]:
                if color.get(nb, WHITE) == GRAY: return True
                if color.get(nb, WHITE) == WHITE and dfs(nb): return True
            color[n] = BLACK; return False
        return any(dfs(n) for n in self.adj if color[n] == WHITE)


# ══════════════════════════════════════
# ── UnionFind class ──────────────────────
# ══════════════════════════════════════

class UnionFind:
    """Path compression + union by rank → O(α) per operation."""
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0]*n
        self.components = n

    def find(self, x):
        if self.parent[x] != x: self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]: px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]: self.rank[px] += 1
        self.components -= 1; return True

    def connected(self, x, y): return self.find(x) == self.find(y)


# ══════════════════════════════════════
# ── Problems ──────────────────────
# ══════════════════════════════════════

def num_islands(grid: list[list[str]]) -> int:
    """🟡 Number of Islands (LC #200)"""
    rows, cols, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if r<0 or r>=rows or c<0 or c>=cols or grid[r][c]!='1': return
        grid[r][c]='0'
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(r+dr,c+dc)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c]=='1': dfs(r,c); count+=1
    return count

def can_finish(n: int, prereqs: list[list[int]]) -> bool:
    """🟡 Course Schedule (LC #207) — cycle detection"""
    adj = defaultdict(list)
    for a,b in prereqs: adj[b].append(a)
    state = [0]*n
    def dfs(u):
        if state[u]==1: return False
        if state[u]==2: return True
        state[u]=1
        for v in adj[u]:
            if not dfs(v): return False
        state[u]=2; return True
    return all(dfs(i) for i in range(n))

def find_order(n: int, prereqs: list[list[int]]) -> list[int]:
    """🟡 Course Schedule II (LC #210) — topological order"""
    adj = defaultdict(list); indegree = [0]*n
    for a,b in prereqs: adj[b].append(a); indegree[a]+=1
    q = deque(i for i in range(n) if indegree[i]==0); order=[]
    while q:
        u=q.popleft(); order.append(u)
        for v in adj[u]: indegree[v]-=1; (q.append(v) if indegree[v]==0 else None)
    return order if len(order)==n else []

def pacific_atlantic(heights: list[list[int]]) -> list[list[int]]:
    """🟡 Pacific Atlantic Water Flow (LC #417)"""
    rows, cols = len(heights), len(heights[0])
    pac, atl = set(), set()
    def dfs(r,c,visited,prev):
        if (r,c) in visited or r<0 or r>=rows or c<0 or c>=cols or heights[r][c]<prev: return
        visited.add((r,c))
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(r+dr,c+dc,visited,heights[r][c])
    for r in range(rows): dfs(r,0,pac,heights[r][0]); dfs(r,cols-1,atl,heights[r][cols-1])
    for c in range(cols): dfs(0,c,pac,heights[0][c]); dfs(rows-1,c,atl,heights[rows-1][c])
    return [[r,c] for r in range(rows) for c in range(cols) if (r,c) in pac and (r,c) in atl]

def network_delay(times: list[list[int]], n: int, k: int) -> int:
    """🟡 Network Delay Time (LC #743) — Dijkstra"""
    adj = defaultdict(list)
    for u,v,w in times: adj[u].append((v,w))
    dist = {}; heap = [(0,k)]
    while heap:
        d,u = heapq.heappop(heap)
        if u in dist: continue
        dist[u]=d
        for v,w in adj[u]:
            if v not in dist: heapq.heappush(heap,(d+w,v))
    return max(dist.values()) if len(dist)==n else -1

def min_cost_connect_points(points: list[list[int]]) -> int:
    """🟡 Min Cost to Connect All Points (LC #1584) — Prim's MST"""
    n = len(points); visited = set(); cost = 0
    heap = [(0,0)]
    while len(visited) < n:
        d, i = heapq.heappop(heap)
        if i in visited: continue
        visited.add(i); cost += d
        for j in range(n):
            if j not in visited:
                dist = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])
                heapq.heappush(heap,(dist,j))
    return cost

def word_ladder(begin: str, end: str, word_list: list[str]) -> int:
    """🔴 Word Ladder (LC #127) — BFS shortest transformation"""
    words = set(word_list)
    if end not in words: return 0
    q = deque([(begin, 1)])
    while q:
        word, steps = q.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nw = word[:i]+c+word[i+1:]
                if nw == end: return steps+1
                if nw in words: words.discard(nw); q.append((nw, steps+1))
    return 0

def clone_graph(node):
    """🟡 Clone Graph (LC #133)"""
    if not node: return None
    visited = {}
    def dfs(n):
        if n in visited: return visited[n]
        clone = type(n)(n.val); visited[n] = clone
        for nb in n.neighbors: clone.neighbors.append(dfs(nb))
        return clone
    return dfs(node)

# ══════════════════════════════════════
# ── Tests ──────────────────────
# ══════════════════════════════════════

def run_tests():
    print("Running graph tests...\n")

    g = Graph()
    for u,v in [(0,1),(0,2),(1,3),(2,4)]: g.add_edge(u,v)
    assert set(g.bfs(0)) == {0,1,2,3,4}; assert g.bfs(0)[0] == 0
    print("  ✅ BFS: visits all nodes, starts at src")

    assert set(g.dfs(0)) == {0,1,2,3,4}
    print("  ✅ DFS: visits all nodes")

    assert g.shortest_path_bfs(0,4) == [0,2,4]
    print("  ✅ shortest_path_bfs")

    wg = Graph()
    for u,v,w in [(0,1,4),(0,2,1),(2,1,2),(1,3,1),(2,3,5)]: wg.add_edge(u,v,w)
    dist = wg.dijkstra(0)
    assert dist[3] == 4, f"Expected 4 got {dist[3]}"
    print("  ✅ Dijkstra: correct shortest distances")

    dag = Graph(directed=True)
    for u,v in [(5,2),(5,0),(4,0),(4,1),(2,3),(3,1)]: dag.add_edge(u,v)
    order = dag.topological_sort()
    assert len(order) == 6
    print("  ✅ topological_sort")

    uf = UnionFind(5)
    uf.union(0,1); uf.union(2,3)
    assert uf.connected(0,1) and not uf.connected(0,2)
    assert uf.components == 3
    print("  ✅ UnionFind: union / find / components")

    grid = [["1","1","0"],["0","1","0"],["0","0","1"]]
    assert num_islands(grid) == 2
    print("  ✅ num_islands")

    assert can_finish(2,[[1,0]]) and not can_finish(2,[[1,0],[0,1]])
    print("  ✅ can_finish: possible / cycle")

    assert find_order(4,[[1,0],[2,0],[3,1],[3,2]]) in [[0,1,2,3],[0,2,1,3]]
    print("  ✅ find_order: valid topological ordering")

    assert network_delay([[2,1,1],[2,3,1],[3,4,1]],4,2) == 2
    print("  ✅ network_delay")

    assert word_ladder("hit","cog",["hot","dot","dog","lot","log","cog"]) == 5
    print("  ✅ word_ladder")

    assert min_cost_connect_points([[0,0],[2,2],[3,10],[5,2],[7,0]]) == 20
    print("  ✅ min_cost_connect_points (Prim's MST)")

    print("\n🎉 All graph tests passed!")

if __name__ == "__main__":
    run_tests()
