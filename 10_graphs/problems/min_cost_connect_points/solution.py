import heapq

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
