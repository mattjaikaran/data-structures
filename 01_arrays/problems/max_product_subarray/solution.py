from __future__ import annotations

def max_product_subarray(nums: list[int]) -> int:
    """
    🟡 Maximum Product Subarray (LC #152)
    Time: O(n)  Space: O(1)

    TRICK: Track both min AND max at each step.
    A negative * current_min can flip to the new max.
    """
    best = cur_max = cur_min = nums[0]
    for n in nums[1:]:
        candidates = (n, cur_max * n, cur_min * n)
        cur_max, cur_min = max(candidates), min(candidates)
        best = max(best, cur_max)
    return best
