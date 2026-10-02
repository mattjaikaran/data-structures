import heapq

def kth_largest(nums: list[int], k: int) -> int:
    """🟡 Kth Largest Element (LC #215) — min-heap of size k"""
    h = []
    for n in nums:
        heapq.heappush(h, n)
        if len(h) > k: heapq.heappop(h)
    return h[0]
