from collections import Counter

def is_anagram(s: str, t: str) -> bool:
    """🟢 Valid Anagram (LC #242)"""
    return Counter(s) == Counter(t)
