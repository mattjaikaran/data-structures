from collections import Counter

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    """🟡 Top K Frequent Elements (LC #347)"""
    return [x for x,_ in Counter(nums).most_common(k)]
