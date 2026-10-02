from __future__ import annotations
from typing import Optional
from fundamentals.singly_linked_list.solution import SNode

def reverse_k_group(head: Optional[SNode], k: int) -> Optional[SNode]:
    """
    🔴 Reverse Nodes in k-Group (LC #25)
    Reverse every k consecutive nodes. Leave remainder as-is.
    O(n) time, O(1) space.
    """
    # Count available nodes
    count, node = 0, head
    while node and count < k:
        node = node.next
        count += 1
    if count < k:
        return head    # fewer than k nodes remain — leave as-is

    # Reverse k nodes
    prev, cur = None, head
    for _ in range(k):
        nxt = cur.next      # type: ignore
        cur.next = prev     # type: ignore
        prev = cur          # type: ignore
        cur = nxt
    # head is now the tail of the reversed group
    # Recursively handle the rest and connect
    head.next = reverse_k_group(cur, k)   # type: ignore
    return prev
