
def kmp_search(text: str, pattern: str) -> list[int]:
    """KMP — returns all start indices of pattern in text. O(n+m)."""
    def build_lps(p):
        lps = [0]*len(p); length=0; i=1
        while i < len(p):
            if p[i]==p[length]: length+=1; lps[i]=length; i+=1
            elif length: length=lps[length-1]
            else: lps[i]=0; i+=1
        return lps

    if not pattern: return []
    lps = build_lps(pattern)
    result=[]; i=j=0
    while i < len(text):
        if text[i]==pattern[j]: i+=1; j+=1
        if j==len(pattern): result.append(i-j); j=lps[j-1]
        elif i<len(text) and text[i]!=pattern[j]:
            if j: j=lps[j-1]
            else: i+=1
    return result
