from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def swap_pairs(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟡 Swap Nodes in Pairs (LC #24)
    Swap every two adjacent nodes.
    O(n) time, O(1) space.
    """
    dummy = SNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        a = prev.next
        b = prev.next.next
        prev.next = b
        a.next = b.next
        b.next = a
        prev = a
    return dummy.next
