from __future__ import annotations

def best_time_buy_sell(prices: list[int]) -> int:
    """
    🟢 Best Time to Buy and Sell Stock (LC #121)
    One transaction max. Return max profit.
    Time: O(n)  Space: O(1)
    Pattern: Track running minimum, compute max profit at each step.
    """
    min_p, profit = float('inf'), 0
    for p in prices:
        min_p = min(min_p, p)
        profit = max(profit, p - min_p)
    return profit
