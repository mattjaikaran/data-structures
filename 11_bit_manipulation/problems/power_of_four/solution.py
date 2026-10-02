

def power_of_four(n: int) -> bool:
    """🟢 Power of Four (LC #342)
    Power of 4: power of 2, AND set bit is at even position.
    0x55555555 = ...01010101 (set bits at even positions)
    """
    return n > 0 and (n & (n-1)) == 0 and (n & 0x55555555) != 0
