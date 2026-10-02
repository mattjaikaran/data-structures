from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def reorder_list(head: Optional[SNode]) -> None:
    """
    🟡 Reorder List (LC #143)
    L0 → Ln → L1 → Ln-1 → L2 → ...

    Steps:
      1. Find middle (slow/fast)
      2. Reverse the second half
      3. Interleave the two halves
    O(n) time, O(1) space.
    """
    if not head or not head.next:
        return

    # 1. Find middle
    slow, fast = head, head
    while fast.next and fast.next.next:
        slow = slow.next        # type: ignore
        fast = fast.next.next

    # 2. Reverse second half
    prev, cur = None, slow.next
    slow.next = None            # split
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt

    # 3. Interleave
    first, second = head, prev
    while second:
        t1, t2 = first.next, second.next
        first.next = second
        second.next = t1
        first = t1              # type: ignore
        second = t2
