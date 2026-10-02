import heapq

def ipo(k: int, w: int, profits: list[int], capital: list[int]) -> int:
    """🔴 IPO (LC #502) — max capital doing at most k projects"""
    available = []
    projects = sorted(zip(capital, profits))
    i = 0
    for _ in range(k):
        while i < len(projects) and projects[i][0] <= w:
            heapq.heappush(available, -projects[i][1]); i += 1
        if not available: break
        w += -heapq.heappop(available)
    return w
