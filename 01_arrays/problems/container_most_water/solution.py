from __future__ import annotations

def container_most_water(heights: list[int]) -> int:
    """
    🟡 Container With Most Water (LC #11)
    Time: O(n)  Space: O(1)

    Pattern: Two pointers. Move the SHORTER side inward — moving
    the taller side can only decrease the width without any guarantee
    of increasing height.
    """
    l, r, best = 0, len(heights) - 1, 0
    while l < r:
        best = max(best, min(heights[l], heights[r]) * (r - l))
        if heights[l] < heights[r]:
            l += 1
        else:
            r -= 1
    return best
