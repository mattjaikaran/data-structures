from collections import Counter

def first_unique_char(s: str) -> int:
    """🟢 First Unique Character in String (LC #387)"""
    cnt = Counter(s)
    for i,c in enumerate(s):
        if cnt[c]==1: return i
    return -1
