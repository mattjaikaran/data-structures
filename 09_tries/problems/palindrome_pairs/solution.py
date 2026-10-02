

def palindrome_pairs(words: list[str]) -> list[list[int]]:
    """🔴 Palindrome Pairs (LC #336) — hash map approach"""
    lookup = {w:i for i,w in enumerate(words)}
    result = []
    def is_pal(s): return s==s[::-1]
    for i, w in enumerate(words):
        for j in range(len(w)+1):
            pre, suf = w[:j], w[j:]
            if is_pal(pre):
                rev = suf[::-1]
                if rev != w and rev in lookup: result.append([lookup[rev],i])
            if j < len(w) and is_pal(suf):
                rev = pre[::-1]
                if rev != w and rev in lookup: result.append([i,lookup[rev]])
    return result
