from __future__ import annotations
from typing import Optional

class DNode:
    """Node for a doubly linked list."""
    def __init__(self, val: int = 0) -> None:
        self.val = val
        self.prev: Optional[DNode] = None
        self.next: Optional[DNode] = None

class DoublyLinkedList:
    """
    Doubly linked list using sentinel head + tail nodes.
    Sentinels eliminate every edge-case conditional.

    The big win over singly: O(1) node removal if you hold a reference.
    This is what makes LRU Cache O(1) end-to-end.
    """

    def __init__(self) -> None:
        # Sentinels — never hold real data
        self._head = DNode()
        self._tail = DNode()
        self._head.next = self._tail
        self._tail.prev = self._head
        self._size = 0

    def __len__(self) -> int:
        return self._size

    def __iter__(self):
        cur = self._head.next
        while cur is not self._tail:
            yield cur.val
            cur = cur.next

    def append_front(self, val: int) -> DNode:
        """Insert at front (after sentinel head). O(1)."""
        return self._insert_after(self._head, val)

    def append_back(self, val: int) -> DNode:
        """Insert at back (before sentinel tail). O(1)."""
        return self._insert_after(self._tail.prev, val)  # type: ignore

    def remove_node(self, node: DNode) -> int:
        """
        Remove a specific node. O(1).
        This is the doubly-linked list's killer feature —
        you can unlink any node in constant time if you hold a reference.
        """
        node.prev.next = node.next   # type: ignore
        node.next.prev = node.prev   # type: ignore
        self._size -= 1
        return node.val

    def remove_front(self) -> int:
        """Remove and return front value. O(1)."""
        if not self._size:
            raise IndexError("List is empty")
        return self.remove_node(self._head.next)  # type: ignore

    def remove_back(self) -> int:
        """Remove and return back value. O(1)."""
        if not self._size:
            raise IndexError("List is empty")
        return self.remove_node(self._tail.prev)  # type: ignore

    def peek_back(self) -> int:
        return self._tail.prev.val  # type: ignore

    def _insert_after(self, ref: DNode, val: int) -> DNode:
        node = DNode(val)
        node.prev = ref
        node.next = ref.next
        ref.next.prev = node  # type: ignore
        ref.next = node
        self._size += 1
        return node
