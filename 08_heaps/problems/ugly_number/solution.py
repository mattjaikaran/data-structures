import heapq

def ugly_number(n: int) -> int:
    """🟡 Ugly Number II (LC #264) — min-heap approach"""
    h = [1]; seen = {1}
    val = 1
    for _ in range(n):
        val = heapq.heappop(h)
        for factor in [2,3,5]:
            nxt = val*factor
            if nxt not in seen: seen.add(nxt); heapq.heappush(h,nxt)
    return val
