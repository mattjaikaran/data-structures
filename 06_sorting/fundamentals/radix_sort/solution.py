
def radix_sort(arr: list[int]) -> list[int]:
    """O(d*(n+10)) — sort by each digit, least significant first."""
    if not arr: return []
    max_val = max(arr); exp = 1
    a = arr[:]
    while max_val // exp > 0:
        buckets = [[] for _ in range(10)]
        for n in a: buckets[(n // exp) % 10].append(n)
        a = [n for bucket in buckets for n in bucket]
        exp *= 10
    return a
