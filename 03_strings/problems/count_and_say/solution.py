
def count_and_say(n: int) -> str:
    """🟡 Count and Say (LC #38)"""
    s='1'
    for _ in range(n-1):
        ns=''; i=0
        while i<len(s):
            j=i
            while j<len(s) and s[j]==s[i]: j+=1
            ns+=str(j-i)+s[i]; i=j
        s=ns
    return s
