
def int_to_roman(num: int) -> str:
    """🟡 Integer to Roman (LC #12)"""
    vals = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),(100,'C'),(90,'XC'),
            (50,'L'),(40,'XL'),(10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    res=''
    for v,s in vals:
        while num>=v: res+=s; num-=v
    return res
