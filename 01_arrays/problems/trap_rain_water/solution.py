from __future__ import annotations

def trap_rain_water(height: list[int]) -> int:
    """
    🔴 Trapping Rain Water (LC #42)
    Time: O(n)  Space: O(1)

    At each position, water = min(max_left, max_right) - height[i].
    Two pointer approach: process the shorter side — we know its
    water contribution is bounded by its own max.
    """
    l, r = 0, len(height) - 1
    lmax = rmax = water = 0
    while l < r:
        if height[l] < height[r]:
            if height[l] >= lmax:
                lmax = height[l]
            else:
                water += lmax - height[l]
            l += 1
        else:
            if height[r] >= rmax:
                rmax = height[r]
            else:
                water += rmax - height[r]
            r -= 1
    return water
