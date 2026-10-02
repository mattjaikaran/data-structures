
def erase_overlap_intervals(intervals: list[list[int]]) -> int:
    """🟡 Non-overlapping Intervals (LC #435) — min to remove"""
    # Greedy: sort by end, keep interval with earliest end (most room for future)
    intervals.sort(key=lambda x: x[1])
    keep = 0; last_end = float('-inf')
    for start, end in intervals:
        if start >= last_end: keep += 1; last_end = end
    return len(intervals) - keep
