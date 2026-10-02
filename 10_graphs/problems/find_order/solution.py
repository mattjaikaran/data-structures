from collections import defaultdict, deque

def find_order(n: int, prereqs: list[list[int]]) -> list[int]:
    """🟡 Course Schedule II (LC #210) — topological order"""
    adj = defaultdict(list); indegree = [0]*n
    for a,b in prereqs: adj[b].append(a); indegree[a]+=1
    q = deque(i for i in range(n) if indegree[i]==0); order=[]
    while q:
        u=q.popleft(); order.append(u)
        for v in adj[u]: indegree[v]-=1; (q.append(v) if indegree[v]==0 else None)
    return order if len(order)==n else []
