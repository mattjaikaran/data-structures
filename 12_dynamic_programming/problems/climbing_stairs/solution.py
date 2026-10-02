
def climbing_stairs(n: int) -> int:
    """🟢 Climbing Stairs (LC #70)
    Each step: climb 1 or 2 stairs. Count ways to reach top.
    dp[i] = dp[i-1] + dp[i-2]  — same as Fibonacci
    """
    if n <= 2: return n
    a, b = 1, 2
    for _ in range(3, n+1): a, b = b, a+b
    return b
