
def longest_palindromic_substring(s: str) -> str:
    """🟡 Longest Palindromic Substring (LC #5) — expand around centers"""
    res, res_len = "", 0
    for i in range(len(s)):
        for l, r in [(i,i), (i,i+1)]:  # odd and even centers
            while l>=0 and r<len(s) and s[l]==s[r]: l-=1; r+=1
            if r-l-1 > res_len: res = s[l+1:r]; res_len = r-l-1
    return res
