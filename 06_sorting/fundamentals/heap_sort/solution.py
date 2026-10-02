
def heap_sort(arr: list) -> list:
    """O(n log n) — build max-heap, extract max n times."""
    a = arr[:]
    n = len(a)

    def heapify(n, i):
        largest = i; l = 2*i+1; r = 2*i+2
        if l < n and a[l] > a[largest]: largest = l
        if r < n and a[r] > a[largest]: largest = r
        if largest != i:
            a[i], a[largest] = a[largest], a[i]
            heapify(n, largest)

    for i in range(n//2-1, -1, -1): heapify(n, i)
    for i in range(n-1, 0, -1):
        a[0], a[i] = a[i], a[0]
        heapify(i, 0)
    return a
