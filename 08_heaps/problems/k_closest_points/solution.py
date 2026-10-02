import heapq

def k_closest_points(points: list[list[int]], k: int) -> list[list[int]]:
    """🟡 K Closest Points to Origin (LC #973)"""
    return heapq.nsmallest(k, points, key=lambda p: p[0]**2 + p[1]**2)
