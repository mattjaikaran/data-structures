

def count_bits_range(n: int) -> list[int]:
    """🟢 Counting Bits (LC #338)
    dp[i] = dp[i >> 1] + (i & 1)
    Right shift removes last bit; add 1 if it was set.
    """
    dp = [0] * (n+1)
    for i in range(1, n+1): dp[i] = dp[i >> 1] + (i & 1)
    return dp
