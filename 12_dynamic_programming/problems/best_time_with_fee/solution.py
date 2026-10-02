
def best_time_with_fee(prices: list[int], fee: int) -> int:
    """🟡 Best Time with Transaction Fee (LC #714)"""
    cash, held = 0, -prices[0]
    for p in prices[1:]:
        cash = max(cash, held+p-fee)
        held = max(held, cash-p)
    return cash
