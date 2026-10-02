from collections import defaultdict

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
