
def two_city_scheduling(costs: list[list[int]]) -> int:
    """🟡 Two City Scheduling (LC #1029)"""
    # Sort by (cost_A - cost_B): send cheapest half to A, rest to B
    costs.sort(key=lambda x: x[0] - x[1])
    n = len(costs) // 2
    return sum(c[0] for c in costs[:n]) + sum(c[1] for c in costs[n:])
