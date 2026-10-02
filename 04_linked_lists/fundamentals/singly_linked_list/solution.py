from __future__ import annotations
from typing import Optional

class SNode:
    """Node for a singly linked list."""
    def __init__(self, val: int, nxt: Optional[SNode] = None) -> None:
        self.val = val
        self.next = nxt

    def __repr__(self) -> str:
        return f"SNode({self.val})"

class SinglyLinkedList:
    """
    Singly linked list with head and tail pointers.
    Tail pointer makes append O(1) without any traversal.
    """

    def __init__(self) -> None:
        self.head: Optional[SNode] = None
        self.tail: Optional[SNode] = None
        self._size: int = 0

    def __len__(self) -> int:
        return self._size

    def __iter__(self):
        cur = self.head
        while cur:
            yield cur.val
            cur = cur.next

    def __repr__(self) -> str:
        return " -> ".join(str(v) for v in self) + " -> None"

    # ── Core operations ───────────────────────

    def prepend(self, val: int) -> None:
        """Insert at front. O(1)."""
        node = SNode(val, self.head)
        self.head = node
        if self.tail is None:
            self.tail = node
        self._size += 1

    def append(self, val: int) -> None:
        """Insert at back. O(1) with tail pointer."""
        node = SNode(val)
        if self.tail:
            self.tail.next = node
        else:
            self.head = node
        self.tail = node
        self._size += 1

    def pop_front(self) -> int:
        """Remove and return head value. O(1)."""
        if not self.head:
            raise IndexError("List is empty")
        val = self.head.val
        self.head = self.head.next
        if not self.head:
            self.tail = None
        self._size -= 1
        return val

    def remove_value(self, val: int) -> bool:
        """Remove first occurrence of val. O(n)."""
        if not self.head:
            return False
        if self.head.val == val:
            self.pop_front()
            return True
        prev, cur = self.head, self.head.next
        while cur:
            if cur.val == val:
                prev.next = cur.next
                if cur is self.tail:
                    self.tail = prev
                self._size -= 1
                return True
            prev, cur = cur, cur.next
        return False

    def reverse(self) -> None:
        """Reverse in-place. O(n) time, O(1) space."""
        prev, cur = None, self.head
        self.tail = self.head
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        self.head = prev

    def to_list(self) -> list[int]:
        return list(self)

def from_list(vals: list[int]) -> Optional[SNode]:
    """Build a singly-linked chain from a Python list."""
    dummy = SNode(0)
    cur = dummy
    for v in vals:
        cur.next = SNode(v)
        cur = cur.next
    return dummy.next

def to_list(head: Optional[SNode]) -> list[int]:
    """Convert a chain back to a Python list."""
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result
