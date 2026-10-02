from collections import defaultdict, deque
import heapq

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
