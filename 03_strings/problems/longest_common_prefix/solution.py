
def longest_common_prefix(strs: list[str]) -> str:
    """🟢 Longest Common Prefix (LC #14)"""
    if not strs: return ''
    prefix=strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix): prefix=prefix[:-1]
    return prefix
