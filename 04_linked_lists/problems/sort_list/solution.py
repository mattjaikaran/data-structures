from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode
from problems.merge_sorted.solution import merge_sorted

def sort_list(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟡 Sort List (LC #148)
    Merge sort on a linked list.
    O(n log n) time, O(log n) space (recursion stack).
    """
    if not head or not head.next:
        return head
    # Find middle and split
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next    # type: ignore
        fast = fast.next.next
    mid = slow.next         # type: ignore
    slow.next = None        # split
    left = sort_list(head)
    right = sort_list(mid)
    return merge_sorted(left, right)
