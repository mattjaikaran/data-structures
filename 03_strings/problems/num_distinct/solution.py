
def num_distinct(s: str, t: str) -> int:
    """🔴 Distinct Subsequences (LC #115)"""
    m,n=len(s),len(t); dp=[0]*(n+1); dp[0]=1
    for c in s:
        for j in range(n,0,-1):
            if c==t[j-1]: dp[j]+=dp[j-1]
    return dp[n]
