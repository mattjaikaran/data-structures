
def longest_consecutive(nums: list[int]) -> int:
    """🟡 Longest Consecutive Sequence (LC #128) — O(n)"""
    s = set(nums); best = 0
    for n in s:
        if n-1 not in s:
            cur = n; length = 1
            while cur+1 in s: cur+=1; length+=1
            best = max(best, length)
    return best
