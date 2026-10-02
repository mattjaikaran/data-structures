
def house_robber(nums: list[int]) -> int:
    """🟡 House Robber (LC #198)
    Can't rob adjacent houses. Maximize total.
    dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    """
    if not nums: return 0
    if len(nums) == 1: return nums[0]
    a, b = nums[0], max(nums[0], nums[1])
    for i in range(2, len(nums)):
        a, b = b, max(b, a + nums[i])
    return b
