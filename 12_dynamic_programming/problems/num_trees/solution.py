
def count_unique_bst(n: int) -> int:
    """🟡 Unique Binary Search Trees (LC #96) — Catalan number
    dp[i] = number of unique BSTs with i nodes
    dp[i] = sum(dp[j-1] * dp[i-j]) for j in 1..i
    """
    dp = [0]*(n+1); dp[0] = dp[1] = 1
    for i in range(2, n+1):
        for j in range(1, i+1):
            dp[i] += dp[j-1] * dp[i-j]
    return dp[n]
