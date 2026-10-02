

def is_power_of_two(n: int) -> bool:
    """Power of 2 has exactly one bit set. n & (n-1) clears lowest bit."""
    return n > 0 and (n & (n-1)) == 0

def power_of_two(n: int) -> bool:
    """🟢 Power of Two (LC #231)"""
    return is_power_of_two(n)
