
def min_path_sum(grid: list[list[int]]) -> int:
    """🟡 Minimum Path Sum (LC #64)"""
    m, n = len(grid), len(grid[0])
    dp = [row[:] for row in grid]
    for r in range(1, m): dp[r][0] += dp[r-1][0]
    for c in range(1, n): dp[0][c] += dp[0][c-1]
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] += min(dp[r-1][c], dp[r][c-1])
    return dp[m-1][n-1]
