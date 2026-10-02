from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def remove_duplicates(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟢 Remove Duplicates from Sorted List (LC #83)
    O(n) time, O(1) space.
    """
    cur = head
    while cur and cur.next:
        if cur.val == cur.next.val:
            cur.next = cur.next.next
        else:
            cur = cur.next
    return head
