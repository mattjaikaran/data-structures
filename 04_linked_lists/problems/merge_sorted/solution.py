from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def merge_sorted(l1: Optional[SNode], l2: Optional[SNode]) -> Optional[SNode]:
    """
    Merge two sorted linked lists.
    Dummy head avoids special-casing the first node.
    O(m+n) time, O(1) space.
    """
    dummy = SNode(0)
    cur = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next

