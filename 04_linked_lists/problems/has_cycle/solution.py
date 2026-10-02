from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def has_cycle(head: Optional[SNode]) -> bool:
    """
    Floyd's Tortoise & Hare.
    Slow pointer moves 1 step; fast moves 2.
    If they ever meet, there is a cycle.
    O(n) time, O(1) space.
    """
    slow = fast = head
    while fast and fast.next:
        slow = slow.next          # type: ignore
        fast = fast.next.next
        if slow is fast:
            return True
    return False

