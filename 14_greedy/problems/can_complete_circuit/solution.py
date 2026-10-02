
def can_complete_circuit(gas: list[int], cost: list[int]) -> int:
    """🟡 Gas Station (LC #134) — circular route"""
    # If total gas >= total cost, a solution exists.
    # The starting point is after the last deficit.
    if sum(gas) < sum(cost): return -1
    tank = start = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0: start = i + 1; tank = 0
    return start
