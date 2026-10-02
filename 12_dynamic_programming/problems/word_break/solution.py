
def word_break(s: str, word_dict: list[str]) -> bool:
    """🟡 Word Break (LC #139)
    dp[i] = True if s[:i] can be segmented using word_dict
    """
    words = set(word_dict)
    dp = [False] * (len(s)+1)
    dp[0] = True
    for i in range(1, len(s)+1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True; break
    return dp[-1]
