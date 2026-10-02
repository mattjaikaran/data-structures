
from fundamentals.count_bits.solution import count_bits

def hamming_distance(x: int, y: int) -> int:
    """🟢 Hamming Distance (LC #461) — count positions where bits differ"""
    return count_bits(x ^ y)
