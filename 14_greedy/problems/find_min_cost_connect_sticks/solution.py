import heapq

def find_min_cost_connect_sticks(sticks: list[int]) -> int:
    """🟡 Minimum Cost to Connect Sticks (LC #1167)"""
    heapq.heapify(sticks)
    cost = 0
    while len(sticks) > 1:
        a, b = heapq.heappop(sticks), heapq.heappop(sticks)
        cost += a + b; heapq.heappush(sticks, a + b)
    return cost
