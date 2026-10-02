
def best_time_k_transactions(k: int, prices: list[int]) -> int:
    """🔴 Best Time to Buy and Sell Stock IV (LC #188)"""
    if not prices: return 0
    n = len(prices)
    if k >= n//2:
        return sum(max(prices[i]-prices[i-1],0) for i in range(1,n))
    buy = [-float('inf')]*k; sell = [0]*k
    for p in prices:
        for j in range(k):
            buy[j] = max(buy[j], (sell[j-1] if j>0 else 0)-p)
            sell[j] = max(sell[j], buy[j]+p)
    return sell[-1]
