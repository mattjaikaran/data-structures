
def is_scramble(s1: str, s2: str) -> bool:
    """🔴 Scramble String (LC #87) — memoized recursion"""
    from functools import lru_cache
    @lru_cache(None)
    def dp(a,b):
        if a==b: return True
        if sorted(a)!=sorted(b): return False
        n=len(a)
        for k in range(1,n):
            if (dp(a[:k],b[:k]) and dp(a[k:],b[k:])) or \
               (dp(a[:k],b[n-k:]) and dp(a[k:],b[:n-k])): return True
        return False
    return dp(s1,s2)
