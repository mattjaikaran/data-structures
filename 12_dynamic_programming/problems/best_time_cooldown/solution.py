
def best_time_with_cooldown(prices: list[int]) -> int:
    """🟡 Best Time to Buy and Sell Stock with Cooldown (LC #309)
    States: held, sold (cooldown), idle
    """
    held = -float('inf'); sold = idle = 0
    for p in prices:
        held, sold, idle = max(held, idle-p), held+p, max(idle, sold)
    return max(sold, idle)
