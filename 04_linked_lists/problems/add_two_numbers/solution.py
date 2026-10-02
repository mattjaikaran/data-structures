from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def add_two_numbers(
    l1: Optional[SNode], l2: Optional[SNode]
) -> Optional[SNode]:
    """
    🟡 Add Two Numbers (LC #2)
    Digits stored in reverse order. Simulate column addition with carry.
    O(max(m,n)) time, O(max(m,n)) space.
    """
    dummy = SNode(0)
    cur = dummy
    carry = 0
    while l1 or l2 or carry:
        val = carry
        if l1:
            val += l1.val
            l1 = l1.next
        if l2:
            val += l2.val
            l2 = l2.next
        carry, digit = divmod(val, 10)
        cur.next = SNode(digit)
        cur = cur.next
    return dummy.next
