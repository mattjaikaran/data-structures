import heapq

def find_kth_largest_stream(stream: list[int], k: int) -> list[int]:
    """🟡 Kth Largest in Stream (LC #703) — running kth largest after each add"""
    h = []; res = []
    for n in stream:
        heapq.heappush(h, n)
        if len(h) > k: heapq.heappop(h)
        res.append(h[0] if len(h)==k else -1)
    return res
