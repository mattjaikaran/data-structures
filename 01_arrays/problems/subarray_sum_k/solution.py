from __future__ import annotations

def subarray_sum_k(nums: list[int], k: int) -> int:
    """
    🟡 Subarray Sum Equals K (LC #560)
    Count subarrays summing exactly to k.
    Time: O(n)  Space: O(n)

    Pattern: Prefix sum + hash map.
      If prefix[j] - prefix[i] = k, then subarray [i+1..j] sums to k.
      Count how many previous prefixes equal (current_prefix - k).
    """
    count = prefix = 0
    freq: dict[int, int] = {0: 1}
    for n in nums:
        prefix += n
        count += freq.get(prefix - k, 0)
        freq[prefix] = freq.get(prefix, 0) + 1
    return count
