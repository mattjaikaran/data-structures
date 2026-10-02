
def merge_intervals_sorted(intervals: list[list[int]]) -> list[list[int]]:
    """🟡 Merge overlapping intervals (LC #56). Sort first, then linear scan."""
    if not intervals: return []
    intervals = sorted(intervals, key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], end)
        else: merged.append([start, end])
    return merged
