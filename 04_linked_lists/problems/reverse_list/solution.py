from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def reverse_list(head: Optional[SNode]) -> Optional[SNode]:
    """Reverse a linked list iteratively. O(n) time, O(1) space."""
    prev, cur = None, head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev

