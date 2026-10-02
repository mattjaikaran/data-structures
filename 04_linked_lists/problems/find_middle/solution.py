from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def find_middle(head: Optional[SNode]) -> Optional[SNode]:
    """
    Find middle node using slow/fast pointers.
    When fast reaches end, slow is at the middle.
    O(n) time, O(1) space.
    """
    slow = fast = head
    while fast and fast.next:
        slow = slow.next          # type: ignore
        fast = fast.next.next
    return slow

