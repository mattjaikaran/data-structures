
def quick_sort_inplace(arr: list, lo: int = 0, hi: int = None) -> list:
    """In-place quicksort with Lomuto partition scheme."""
    if hi is None: arr = arr[:]; hi = len(arr) - 1

    def partition(lo, hi):
        pivot = arr[hi]; i = lo - 1
        for j in range(lo, hi):
            if arr[j] <= pivot:
                i += 1; arr[i], arr[j] = arr[j], arr[i]
        arr[i+1], arr[hi] = arr[hi], arr[i+1]
        return i + 1

    def _qs(lo, hi):
        if lo < hi:
            p = partition(lo, hi)
            _qs(lo, p-1); _qs(p+1, hi)

    _qs(lo, hi); return arr
