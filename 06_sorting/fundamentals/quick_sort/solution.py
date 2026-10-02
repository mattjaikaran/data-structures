import random

def quick_sort(arr: list) -> list:
    """O(n log n) avg, O(n²) worst — random pivot avoids worst case."""
    if len(arr) <= 1: return arr
    pivot = random.choice(arr)
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)
