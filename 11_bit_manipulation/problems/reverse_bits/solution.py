

def reverse_bits(n: int) -> int:
    """🟢 Reverse Bits (LC #190) — reverse 32-bit unsigned integer"""
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result
