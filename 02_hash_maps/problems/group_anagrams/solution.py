from collections import defaultdict

def group_anagrams(strs: list[str]) -> list[list[str]]:
    """🟡 Group Anagrams (LC #49) — sorted key"""
    groups = defaultdict(list)
    for s in strs: groups[tuple(sorted(s))].append(s)
    return list(groups.values())
