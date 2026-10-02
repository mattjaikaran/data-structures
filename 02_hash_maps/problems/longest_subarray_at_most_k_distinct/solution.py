from collections import defaultdict

def longest_subarray_at_most_k_distinct(s: str, k: int) -> int:
    """🟡 Longest Substring with At Most K Distinct (LC #340)"""
    cnt = defaultdict(int); left = best = 0
    for right, c in enumerate(s):
        cnt[c]+=1
        while len(cnt)>k: cnt[s[left]]-=1; (cnt.pop(s[left]) if cnt[s[left]]==0 else None); left+=1
        best = max(best, right-left+1)
    return best
