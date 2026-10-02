
def daily_temperatures(temps: list[int]) -> list[int]:
    """🟡 Daily Temperatures (LC #739) — monotonic decreasing stack. O(n)."""
    result = [0] * len(temps)
    stack: list[int] = []  # indices
    for i, t in enumerate(temps):
        while stack and t > temps[stack[-1]]:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)
    return result
