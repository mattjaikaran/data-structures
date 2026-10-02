
def multiply_strings(num1: str, num2: str) -> str:
    """🟡 Multiply Strings (LC #43) — no int() conversion"""
    m,n=len(num1),len(num2); pos=[0]*(m+n)
    for i in range(m-1,-1,-1):
        for j in range(n-1,-1,-1):
            mul=(ord(num1[i])-48)*(ord(num2[j])-48)
            p1,p2=i+j,i+j+1; total=mul+pos[p2]
            pos[p2]=total%10; pos[p1]+=total//10
    res=''.join(str(d) for d in pos).lstrip('0')
    return res or '0'
