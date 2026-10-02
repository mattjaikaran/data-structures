from collections import Counter

def four_sum_count(a,b,c,d) -> int:
    """🟡 4Sum II (LC #454)"""
    ab = Counter(x+y for x in a for y in b)
    return sum(ab.get(-x-y,0) for x in c for y in d)
