
def insert_interval(intervals: list[list[int]], new: list[int]) -> list[list[int]]:
    """🟡 Insert Interval (LC #57)"""
    result = []; i = 0; n = len(intervals)
    while i < n and intervals[i][1] < new[0]:
        result.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= new[1]:
        new[0] = min(new[0], intervals[i][0])
        new[1] = max(new[1], intervals[i][1]); i += 1
    result.append(new)
    while i < n: result.append(intervals[i]); i += 1
    return result
