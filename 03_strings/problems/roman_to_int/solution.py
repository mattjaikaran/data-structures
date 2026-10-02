
def roman_to_int(s: str) -> int:
    """🟢 Roman to Integer (LC #13)"""
    vals = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result = 0
    for i in range(len(s)):
        if i+1<len(s) and vals[s[i]]<vals[s[i+1]]: result-=vals[s[i]]
        else: result+=vals[s[i]]
    return result
