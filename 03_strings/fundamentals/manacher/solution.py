
def manacher(s: str) -> str:
    """Manacher's O(n) longest palindromic substring."""
    t = '#' + '#'.join(s) + '#'
    n=len(t); p=[0]*n; c=r=0
    for i in range(n):
        mirror = 2*c-i
        if i<r: p[i]=min(r-i, p[mirror])
        while i+p[i]+1<n and i-p[i]-1>=0 and t[i+p[i]+1]==t[i-p[i]-1]: p[i]+=1
        if i+p[i]>r: c,r=i,i+p[i]
    center=max(range(n), key=lambda x: p[x])
    start=(center-p[center])//2
    return s[start:start+p[center]]
