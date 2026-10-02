
def burst_balloons(nums: list[int]) -> int:
    """🔴 Burst Balloons (LC #312)
    Add sentinels 1 at both ends.
    dp[i][j] = max coins from bursting all balloons between i and j (exclusive).
    Think of k as the LAST balloon burst in range [i,j].
    """
    nums = [1] + nums + [1]
    n = len(nums)
    dp = [[0]*n for _ in range(n)]
    for length in range(2, n):
        for left in range(n-length):
            right = left+length
            for k in range(left+1, right):
                dp[left][right] = max(dp[left][right],
                    nums[left]*nums[k]*nums[right] + dp[left][k] + dp[k][right])
    return dp[0][n-1]
