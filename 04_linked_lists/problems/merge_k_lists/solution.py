from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode
from problems.merge_sorted.solution import merge_sorted

def merge_k_sorted(lists: list[Optional[SNode]]) -> Optional[SNode]:
    """
    🔴 Merge K Sorted Lists (LC #23)
    Divide and conquer — pair lists and merge repeatedly.
    O(n log k) time where n = total nodes, k = number of lists.
    """
    if not lists:
        return None
    if len(lists) == 1:
        return lists[0]
    mid = len(lists) // 2
    left = merge_k_sorted(lists[:mid])
    right = merge_k_sorted(lists[mid:])
    return merge_sorted(left, right)
