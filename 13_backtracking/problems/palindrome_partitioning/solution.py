

def palindrome_partitioning(s: str) -> list[list[str]]:
    """🟡 Palindrome Partitioning (LC #131)"""
    result = []
    def is_pal(sub): return sub == sub[::-1]
    def bt(start, path):
        if start == len(s): result.append(path[:]); return
        for end in range(start+1, len(s)+1):
            sub = s[start:end]
            if is_pal(sub):
                path.append(sub); bt(end, path); path.pop()
    bt(0, [])
    return result
