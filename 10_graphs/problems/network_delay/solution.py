from collections import defaultdict
import heapq

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
