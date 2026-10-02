
def z_algorithm(s: str) -> list[int]:
    """Z-array: Z[i] = length of longest s[i:] matching prefix of s. O(n)."""
    n=len(s); z=[0]*n; z[0]=n; l=r=0
    for i in range(1,n):
        if i<r: z[i]=min(r-i,z[i-l])
        while i+z[i]<n and s[z[i]]==s[i+z[i]]: z[i]+=1
        if i+z[i]>r: l,r=i,i+z[i]
    return z

def z_search(text: str, pattern: str) -> list[int]:
    """Pattern search using Z-algorithm."""
    s = pattern + '$' + text
    z = z_algorithm(s)
    m = len(pattern)
    return [i-m-1 for i in range(m+1, len(s)) if z[i]==m]
