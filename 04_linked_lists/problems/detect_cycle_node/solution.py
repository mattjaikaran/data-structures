from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def detect_cycle_node(head: Optional[SNode]) -> Optional[SNode]:
    """
    🔴 Linked List Cycle II (LC #142)
    Find the node where the cycle begins.

    Math proof: if slow and fast meet at point X inside the cycle,
    distance(head → cycle start) == distance(X → cycle start).
    Reset slow to head, advance both at speed 1 → they meet at cycle start.
    O(n) time, O(1) space.
    """
    slow = fast = head
    while fast and fast.next:
        slow = slow.next        # type: ignore
        fast = fast.next.next
        if slow is fast:
            slow = head
            while slow is not fast:
                slow = slow.next    # type: ignore
                fast = fast.next    # type: ignore
            return slow
    return None
