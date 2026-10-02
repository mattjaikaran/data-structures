
def selection_sort(arr: list) -> list:
    """O(n²) — find minimum in unsorted portion, place at front."""
    a = arr[:]
    for i in range(len(a)):
        min_idx = min(range(i, len(a)), key=lambda j: a[j])
        a[i], a[min_idx] = a[min_idx], a[i]
    return a
