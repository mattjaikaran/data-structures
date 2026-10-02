
def meeting_rooms(intervals: list[list[int]]) -> bool:
    """🟡 Meeting Rooms (LC #252) — can a person attend all?"""
    intervals.sort()
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]: return False
    return True
