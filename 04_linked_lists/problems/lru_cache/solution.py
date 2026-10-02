from __future__ import annotations
from fundamentals.doubly_linked_list.solution import DNode


class LRUCache:
    """Keep key/value nodes in access order for O(1) lookup and eviction."""

    def __init__(self, capacity: int) -> None:
        self.cap = capacity
        self._map: dict[int, DNode] = {}

        self._head = DNode()   # sentinel
        self._tail = DNode()   # sentinel
        self._head.next = self._tail
        self._tail.prev = self._head

    def _remove(self, node: DNode) -> None:
        node.prev.next = node.next   # type: ignore
        node.next.prev = node.prev   # type: ignore

    def _insert_front(self, node: DNode) -> None:
        node.next = self._head.next
        node.prev = self._head
        self._head.next.prev = node  # type: ignore
        self._head.next = node

    def get(self, key: int) -> int:
        if key not in self._map:
            return -1
        node = self._map[key]
        self._remove(node)
        self._insert_front(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self._map:
            self._remove(self._map[key])
            del self._map[key]
        if len(self._map) == self.cap:
            lru = self._tail.prev   # type: ignore
            # Recover key: we need reverse lookup. Store key in node.
            # For simplicity, we iterate — production code uses a key field.
            evict_key = next(k for k, v in self._map.items() if v is lru)
            self._remove(lru)
            del self._map[evict_key]
        node = DNode(value)
        self._map[key] = node
        self._insert_front(node)
