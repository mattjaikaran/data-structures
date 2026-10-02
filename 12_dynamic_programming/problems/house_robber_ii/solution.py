
def house_robber_ii(nums: list[int]) -> int:
    """🟡 House Robber II (LC #213) — circular arrangement
    First and last houses are adjacent. Run robber twice:
    once on [0..n-2], once on [1..n-1], take the max.
    """
    def rob(arr):
        a, b = 0, 0
        for n in arr: a, b = b, max(b, a+n)
        return b
    return max(nums[0], rob(nums[:-1]), rob(nums[1:]))
