from __future__ import annotations

def largest_rectangle_histogram(heights: list[int]) -> int:
    """
    🔴 Largest Rectangle in Histogram (LC #84)
    Time: O(n)  Space: O(n)

    Pattern: Monotonic increasing stack storing (start_index, height) pairs.
    When a shorter bar arrives, pop taller bars and compute their max width.
    The 'start' tracks how far LEFT the current bar can extend.
    Sentinel 0 at end forces the stack to fully flush.
    """
    stack: list[tuple[int, int]] = []   # (left_boundary, height)
    best = 0
    for i, h in enumerate(heights + [0]):   # sentinel forces final flush
        start = i
        while stack and stack[-1][1] > h:
            left, bar_h = stack.pop()
            best = max(best, bar_h * (i - left))
            start = left   # current bar can extend left to where popped bar started
        stack.append((start, h))
    return best
