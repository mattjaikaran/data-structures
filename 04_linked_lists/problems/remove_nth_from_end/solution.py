from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def remove_nth_from_end(head: Optional[SNode], n: int) -> Optional[SNode]:
    """
    🟡 Remove Nth Node From End of List (LC #19)

    Two-pointer trick:
      Advance `fast` n+1 steps ahead of `slow`.
      When fast hits None, slow.next is the target.
    O(L) time, O(1) space.
    """
    dummy = SNode(0, head)
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next   # type: ignore
    while fast:
        fast = fast.next
        slow = slow.next   # type: ignore
    slow.next = slow.next.next  # type: ignore
    return dummy.next
