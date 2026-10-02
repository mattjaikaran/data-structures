
def max_product_subarray(nums: list[int]) -> int:
    """🟡 Maximum Product Subarray (LC #152)"""
    best = cur_max = cur_min = nums[0]
    for n in nums[1:]:
        opts = (n, cur_max*n, cur_min*n)
        cur_max, cur_min = max(opts), min(opts)
        best = max(best, cur_max)
    return best
