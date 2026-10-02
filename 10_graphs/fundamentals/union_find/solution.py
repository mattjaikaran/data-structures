
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
