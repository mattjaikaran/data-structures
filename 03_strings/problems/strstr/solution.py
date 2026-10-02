from fundamentals.kmp_search.solution import kmp_search

def strstr(haystack: str, needle: str) -> int:
    """🟢 Implement strStr (LC #28) — KMP"""
    if not needle: return 0
    idx = kmp_search(haystack, needle)
    return idx[0] if idx else -1
