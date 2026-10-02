
def min_arrows_burst_balloons(points: list[list[int]]) -> int:
    """🟡 Minimum Number of Arrows (LC #452)"""
    points.sort(key=lambda x: x[1])
    arrows = 0; pos = float('-inf')
    for start, end in points:
        if start > pos: arrows += 1; pos = end
    return arrows
