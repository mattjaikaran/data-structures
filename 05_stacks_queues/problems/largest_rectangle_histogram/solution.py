
def largest_rectangle_histogram(heights: list[int]) -> int:
    """🔴 Largest Rectangle in Histogram (LC #84) — monotonic stack. O(n)."""
    stack: list[tuple[int,int]] = []
    best = 0
    for i, h in enumerate(heights + [0]):
        start = i
        while stack and stack[-1][1] > h:
            left, bar_h = stack.pop()
            best = max(best, bar_h * (i - left))
            start = left
        stack.append((start, h))
    return best
