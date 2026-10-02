
def coin_change_ways(coins: list[int], amount: int) -> int:
    """🟡 Coin Change II (LC #518) — count combinations"""
    dp = [0] * (amount+1); dp[0] = 1
    for c in coins:
        for a in range(c, amount+1):
            dp[a] += dp[a-c]
    return dp[amount]
