
def counting_sort(arr: list[int], max_val: int = None) -> list[int]:
    """O(n+k) — only works for non-negative integers in a known range."""
    if not arr: return []
    k = (max_val or max(arr)) + 1
    counts = [0] * k
    for n in arr: counts[n] += 1
    result = []
    for val, cnt in enumerate(counts): result.extend([val] * cnt)
    return result
