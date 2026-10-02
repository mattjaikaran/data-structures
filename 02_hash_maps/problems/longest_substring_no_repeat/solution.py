
def longest_substring_no_repeat(s: str) -> int:
    """🟡 Longest Substring Without Repeating Characters (LC #3)"""
    last = {}; best = left = 0
    for right, c in enumerate(s):
        if c in last and last[c] >= left: left = last[c]+1
        last[c] = right; best = max(best, right-left+1)
    return best
