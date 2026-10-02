from collections import Counter

def find_all_anagrams(s: str, p: str) -> list[int]:
    """🟡 Find All Anagrams in a String (LC #438)"""
    need = Counter(p); window = Counter(); result = []; k = len(p)
    for i,c in enumerate(s):
        window[c]+=1
        if i>=k: lc=s[i-k]; window[lc]-=1; (window.pop(lc) if window[lc]==0 else None)
        if window==need: result.append(i-k+1)
    return result
