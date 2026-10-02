
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
