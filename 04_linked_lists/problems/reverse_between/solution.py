from __future__ import annotations
from fundamentals.singly_linked_list.solution import SNode

def reverse_between(head: SNode | None, left: int, right: int) -> SNode | None:
    before, current = None, head
    for _ in range(1, left):
        before, current = current, current.next
    tail, reversed_head = current, None
    for _ in range(left, right + 1):
        nxt = current.next
        current.next = reversed_head
        reversed_head, current = current, nxt
    tail.next = current
    if before is None:
        return reversed_head
    before.next = reversed_head
    return head
