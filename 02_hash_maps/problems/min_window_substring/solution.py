from collections import Counter

def min_window_substring(s: str, t: str) -> str:
    """🔴 Minimum Window Substring (LC #76)"""
    need = Counter(t); missing = len(t)
    best = ""; left = i = 0
    for right, c in enumerate(s, 1):
        if need[c] > 0: missing -= 1
        need[c] -= 1
        if missing == 0:
            while need[s[left]] < 0: need[s[left]]+=1; left+=1
            if not best or right-left < len(best): best = s[left:right]
            need[s[left]]+=1; missing+=1; left+=1
    return best
