
def bubble_sort(arr: list) -> list:
    """O(n²) — repeatedly swap adjacent out-of-order elements."""
    a = arr[:]
    n = len(a)
    for i in range(n):
        swapped = False
        for j in range(n-1-i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
                swapped = True
        if not swapped: break  # already sorted — early exit
    return a
