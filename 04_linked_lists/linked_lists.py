"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINKED LISTS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS A LINKED LIST?
  A chain of nodes where each node holds a value and a pointer to the next.
  Unlike arrays, nodes are NOT contiguous in memory.

VARIANTS
  Singly Linked  — each node has `next` only
  Doubly Linked  — each node has `prev` and `next`
  Circular       — tail's next points back to head

WHY USE A LINKED LIST OVER AN ARRAY?
  ✅ O(1) insert/delete at head (no shifting)
  ✅ O(1) insert/delete at any node IF you already hold a reference
  ✅ No wasted capacity (dynamic by nature)
  ❌ O(n) access by index (no random access)
  ❌ Extra memory per node (the pointer itself)
  ❌ Not cache-friendly (scattered in memory)

COMPLEXITY SUMMARY
  ┌──────────────────────────────┬──────────┬──────────┐
  │ Operation                    │ Singly   │ Doubly   │
  ├──────────────────────────────┼──────────┼──────────┤
  │ Access by index              │ O(n)     │ O(n)     │
  │ Search                       │ O(n)     │ O(n)     │
  │ Insert at head               │ O(1)     │ O(1)     │
  │ Insert at tail (tail ptr)    │ O(1)     │ O(1)     │
  │ Insert at middle             │ O(n)     │ O(n)     │
  │ Delete at head               │ O(1)     │ O(1)     │
  │ Delete given node reference  │ O(n)*    │ O(1) ✨  │
  └──────────────────────────────┴──────────┴──────────┘
  * Singly needs to find the predecessor — O(n) traversal

CORE PATTERNS
  • Fast & Slow Pointers (Floyd's)  — cycle detection, middle node
  • Dummy Head Node                 — eliminates edge cases on empty/single
  • In-place Reversal               — three-pointer technique
  • Two-pass Tricks                 — find nth from end
  • Merge Technique                 — merge sorted lists
"""

# ┌─────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                           │
# ├─────────────────────────────────────────────┤
# │ 1. Singly Linked List                       │
# │    - SNode, SinglyLinkedList                │
# │ 2. Doubly Linked List + LRU Cache           │
# │    - DNode, DoublyLinkedList                │
# │    - LRUCache, LRUCacheFull                 │
# │ 3. Algorithm Helpers                        │
# │    - from_list, to_list, reverse_list       │
# │    - has_cycle, find_middle, merge_sorted   │
# │ 4. Interview Problems                       │
# │    - lc_reverse_list, lc_merge_two_sorted  │
# │      lc_linked_list_cycle, lc_middle (🟢)  │
# │    - lc_remove_duplicates           (🟢)   │
# │    - lc_remove_nth_from_end, lc_reorder    │
# │      lc_add_two_numbers, lc_swap_pairs    │
# │      lc_find_duplicate, lc_sort_list (🟡)  │
# │    - lc_reverse_k_group, lc_merge_k_sorted │
# │      lc_detect_cycle_node            (🔴)  │
# │ 5. Tests                                    │
# └─────────────────────────────────────────────┘

from __future__ import annotations
from typing import Optional


# ══════════════════════════════════════════════
# PART 1 — SINGLY LINKED LIST
# ══════════════════════════════════════════════

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


# ══════════════════════════════════════════════
# PART 2 — DOUBLY LINKED LIST  +  LRU CACHE
# ══════════════════════════════════════════════

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


class LRUCache:
    """
    Least Recently Used Cache — O(1) get and put.

    DESIGN
      HashMap  : key → DNode  (O(1) lookup by key)
      DLL      : most-recent at front, least-recent at back
      On get   : move the accessed node to front
      On put   : insert at front; if over capacity, evict from back

    Why doubly linked? Because we need O(1) node removal anywhere,
    not just at head/tail. A singly linked list would require O(n) to
    find the predecessor.
    """

    def __init__(self, capacity: int) -> None:
        self.cap = capacity
        self._map: dict[int, DNode] = {}
        self._list = DoublyLinkedList()

    def get(self, key: int) -> int:
        if key not in self._map:
            return -1
        node = self._map[key]
        val = node.val
        # Move to front: remove then re-insert
        self._list.remove_node(node)
        new_node = self._list.append_front(val)
        self._map[key] = new_node
        # Stash key in a side dict for eviction lookups
        # (we encode key in a separate parallel dict)
        return val

    def put(self, key: int, value: int) -> None:
        if key in self._map:
            self._list.remove_node(self._map[key])
        elif len(self._map) == self.cap:
            # Evict LRU — peek_back returns the tail node's key
            # We need key→eviction, so store (key, value) tuple approach
            pass  # see LRUCacheFull below for production version
        node = self._list.append_front(value)
        self._map[key] = node


class LRUCacheFull:
    """
    Production-quality LRU Cache storing (key, value) tuples in nodes.
    """

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


# ══════════════════════════════════════════════
# PART 3 — STANDALONE ALGORITHM HELPERS
# (used in interview problems; work on raw SNode chains)
# ══════════════════════════════════════════════

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


def reverse_list(head: Optional[SNode]) -> Optional[SNode]:
    """Reverse a linked list iteratively. O(n) time, O(1) space."""
    prev, cur = None, head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev


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


def find_middle(head: Optional[SNode]) -> Optional[SNode]:
    """
    Find middle node using slow/fast pointers.
    When fast reaches end, slow is at the middle.
    O(n) time, O(1) space.
    """
    slow = fast = head
    while fast and fast.next:
        slow = slow.next          # type: ignore
        fast = fast.next.next
    return slow


def merge_sorted(l1: Optional[SNode], l2: Optional[SNode]) -> Optional[SNode]:
    """
    Merge two sorted linked lists.
    Dummy head avoids special-casing the first node.
    O(m+n) time, O(1) space.
    """
    dummy = SNode(0)
    cur = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next


# ══════════════════════════════════════════════
# PART 4 — INTERVIEW PROBLEMS
# ══════════════════════════════════════════════

# ── 🟢 Easy ───────────────────────────────────

def lc_reverse_list(head: Optional[SNode]) -> Optional[SNode]:
    """🟢 Reverse Linked List (LC #206) — O(n) time, O(1) space."""
    return reverse_list(head)


def lc_merge_two_sorted(
    l1: Optional[SNode], l2: Optional[SNode]
) -> Optional[SNode]:
    """🟢 Merge Two Sorted Lists (LC #21) — O(m+n) time, O(1) space."""
    return merge_sorted(l1, l2)


def lc_linked_list_cycle(head: Optional[SNode]) -> bool:
    """🟢 Linked List Cycle (LC #141) — O(n) time, O(1) space."""
    return has_cycle(head)


def lc_middle_of_list(head: Optional[SNode]) -> Optional[SNode]:
    """🟢 Middle of Linked List (LC #876) — O(n) time, O(1) space."""
    return find_middle(head)


def lc_remove_duplicates(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟢 Remove Duplicates from Sorted List (LC #83)
    O(n) time, O(1) space.
    """
    cur = head
    while cur and cur.next:
        if cur.val == cur.next.val:
            cur.next = cur.next.next
        else:
            cur = cur.next
    return head


# ── 🟡 Medium ─────────────────────────────────

def lc_remove_nth_from_end(head: Optional[SNode], n: int) -> Optional[SNode]:
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


def lc_reorder_list(head: Optional[SNode]) -> None:
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


def lc_add_two_numbers(
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


def lc_swap_pairs(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟡 Swap Nodes in Pairs (LC #24)
    Swap every two adjacent nodes.
    O(n) time, O(1) space.
    """
    dummy = SNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        a = prev.next
        b = prev.next.next
        prev.next = b
        a.next = b.next
        b.next = a
        prev = a
    return dummy.next


def lc_find_duplicate(nums: list[int]) -> int:
    """
    🟡 Find the Duplicate Number (LC #287)
    Array of n+1 ints in [1,n]. Find the duplicate without modifying array.

    Treat array as a linked list: index i → index nums[i].
    A duplicate value creates a cycle. Use Floyd's to find the cycle entry.
    O(n) time, O(1) space.
    """
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow


def lc_sort_list(head: Optional[SNode]) -> Optional[SNode]:
    """
    🟡 Sort List (LC #148)
    Merge sort on a linked list.
    O(n log n) time, O(log n) space (recursion stack).
    """
    if not head or not head.next:
        return head
    # Find middle and split
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next    # type: ignore
        fast = fast.next.next
    mid = slow.next         # type: ignore
    slow.next = None        # split
    left = lc_sort_list(head)
    right = lc_sort_list(mid)
    return merge_sorted(left, right)


# ── 🔴 Hard ────────────────────────────────────

def lc_reverse_k_group(head: Optional[SNode], k: int) -> Optional[SNode]:
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
    head.next = lc_reverse_k_group(cur, k)   # type: ignore
    return prev


def lc_merge_k_sorted(lists: list[Optional[SNode]]) -> Optional[SNode]:
    """
    🔴 Merge K Sorted Lists (LC #23)
    Divide and conquer — pair lists and merge repeatedly.
    O(n log k) time where n = total nodes, k = number of lists.
    """
    if not lists:
        return None
    if len(lists) == 1:
        return lists[0]
    mid = len(lists) // 2
    left = lc_merge_k_sorted(lists[:mid])
    right = lc_merge_k_sorted(lists[mid:])
    return merge_sorted(left, right)


def lc_detect_cycle_node(head: Optional[SNode]) -> Optional[SNode]:
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


# ══════════════════════════════════════════════
# PART 5 — TESTS
# ══════════════════════════════════════════════

def run_tests() -> None:
    print("Running linked list tests...\n")

    # ── SinglyLinkedList ──────────────────────
    ll = SinglyLinkedList()
    for v in [1, 2, 3, 4, 5]:
        ll.append(v)
    assert ll.to_list() == [1, 2, 3, 4, 5]
    ll.prepend(0)
    assert ll.to_list() == [0, 1, 2, 3, 4, 5]
    assert ll.pop_front() == 0
    assert ll.to_list() == [1, 2, 3, 4, 5]
    ll.remove_value(3)
    assert ll.to_list() == [1, 2, 4, 5]
    ll.reverse()
    assert ll.to_list() == [5, 4, 2, 1]
    assert len(ll) == 4
    print("  ✅ SinglyLinkedList: append / prepend / pop_front / remove / reverse")

    # ── DoublyLinkedList ──────────────────────
    dll = DoublyLinkedList()
    dll.append_back(1)
    dll.append_back(2)
    dll.append_back(3)
    dll.append_front(0)
    assert list(dll) == [0, 1, 2, 3]
    assert dll.remove_front() == 0
    assert dll.remove_back() == 3
    assert list(dll) == [1, 2]
    assert len(dll) == 2
    print("  ✅ DoublyLinkedList: append_front/back / remove_front/back")

    # ── LRU Cache ─────────────────────────────
    lru = LRUCacheFull(2)
    lru.put(1, 1)
    lru.put(2, 2)
    assert lru.get(1) == 1      # access 1 (now most recent)
    lru.put(3, 3)               # evicts key 2 (LRU)
    assert lru.get(2) == -1     # 2 was evicted
    lru.put(4, 4)               # evicts key 1
    assert lru.get(1) == -1     # 1 was evicted
    assert lru.get(3) == 3
    assert lru.get(4) == 4
    print("  ✅ LRUCache: get / put / eviction order")

    # ── reverse_list ──────────────────────────
    assert to_list(reverse_list(from_list([1, 2, 3, 4, 5]))) == [5, 4, 3, 2, 1]
    assert to_list(reverse_list(from_list([1]))) == [1]
    assert reverse_list(None) is None
    print("  ✅ reverse_list: standard / single / empty")

    # ── has_cycle ─────────────────────────────
    # No cycle
    assert not has_cycle(from_list([1, 2, 3]))
    # Create cycle: 1 -> 2 -> 3 -> back to 2
    n1, n2, n3 = SNode(1), SNode(2), SNode(3)
    n1.next = n2; n2.next = n3; n3.next = n2
    assert has_cycle(n1)
    assert not has_cycle(None)
    print("  ✅ has_cycle: no cycle / cycle / empty")

    # ── find_middle ───────────────────────────
    assert find_middle(from_list([1, 2, 3, 4, 5])).val == 3   # type: ignore
    assert find_middle(from_list([1, 2, 3, 4])).val == 3      # type: ignore  even length → second mid
    assert find_middle(from_list([1])).val == 1                 # type: ignore
    print("  ✅ find_middle: odd / even / single")

    # ── merge_sorted ──────────────────────────
    merged = merge_sorted(from_list([1, 3, 5]), from_list([2, 4, 6]))
    assert to_list(merged) == [1, 2, 3, 4, 5, 6]
    assert to_list(merge_sorted(None, from_list([1]))) == [1]
    assert to_list(merge_sorted(from_list([1]), None)) == [1]
    print("  ✅ merge_sorted: interleaved / one empty / other empty")

    # ── lc_remove_duplicates ──────────────────
    assert to_list(lc_remove_duplicates(from_list([1, 1, 2, 3, 3]))) == [1, 2, 3]
    assert to_list(lc_remove_duplicates(from_list([1, 1, 1]))) == [1]
    print("  ✅ remove_duplicates: mixed / all same")

    # ── lc_remove_nth_from_end ────────────────
    assert to_list(lc_remove_nth_from_end(from_list([1, 2, 3, 4, 5]), 2)) == [1, 2, 3, 5]
    assert to_list(lc_remove_nth_from_end(from_list([1, 2]), 1)) == [1]
    assert to_list(lc_remove_nth_from_end(from_list([1]), 1)) == []
    print("  ✅ remove_nth_from_end: middle / tail / only node")

    # ── lc_add_two_numbers ────────────────────
    # 342 + 465 = 807
    assert to_list(lc_add_two_numbers(from_list([2, 4, 3]), from_list([5, 6, 4]))) == [7, 0, 8]
    # 0 + 0 = 0
    assert to_list(lc_add_two_numbers(from_list([0]), from_list([0]))) == [0]
    # carry propagation: 999 + 1 = 1000
    assert to_list(lc_add_two_numbers(from_list([9, 9, 9]), from_list([1]))) == [0, 0, 0, 1]
    print("  ✅ add_two_numbers: basic / zero / carry propagation")

    # ── lc_swap_pairs ─────────────────────────
    assert to_list(lc_swap_pairs(from_list([1, 2, 3, 4]))) == [2, 1, 4, 3]
    assert to_list(lc_swap_pairs(from_list([1, 2, 3]))) == [2, 1, 3]
    assert to_list(lc_swap_pairs(from_list([1]))) == [1]
    print("  ✅ swap_pairs: even / odd / single")

    # ── lc_reorder_list ───────────────────────
    h = from_list([1, 2, 3, 4, 5])
    lc_reorder_list(h)
    assert to_list(h) == [1, 5, 2, 4, 3]
    h2 = from_list([1, 2, 3, 4])
    lc_reorder_list(h2)
    assert to_list(h2) == [1, 4, 2, 3]
    print("  ✅ reorder_list: odd length / even length")

    # ── lc_sort_list ──────────────────────────
    assert to_list(lc_sort_list(from_list([4, 2, 1, 3]))) == [1, 2, 3, 4]
    assert to_list(lc_sort_list(from_list([-1, 5, 3, 4, 0]))) == [-1, 0, 3, 4, 5]
    assert to_list(lc_sort_list(from_list([1]))) == [1]
    print("  ✅ sort_list: standard / with negatives / single")

    # ── lc_reverse_k_group ────────────────────
    assert to_list(lc_reverse_k_group(from_list([1, 2, 3, 4, 5]), 2)) == [2, 1, 4, 3, 5]
    assert to_list(lc_reverse_k_group(from_list([1, 2, 3, 4, 5]), 3)) == [3, 2, 1, 4, 5]
    assert to_list(lc_reverse_k_group(from_list([1, 2, 3, 4, 5]), 1)) == [1, 2, 3, 4, 5]
    print("  ✅ reverse_k_group: k=2 / k=3 / k=1")

    # ── lc_merge_k_sorted ─────────────────────
    k_lists = [from_list([1, 4, 5]), from_list([1, 3, 4]), from_list([2, 6])]
    assert to_list(lc_merge_k_sorted(k_lists)) == [1, 1, 2, 3, 4, 4, 5, 6]
    assert lc_merge_k_sorted([]) is None
    print("  ✅ merge_k_sorted: standard / empty input")

    # ── lc_find_duplicate ─────────────────────
    assert lc_find_duplicate([1, 3, 4, 2, 2]) == 2
    assert lc_find_duplicate([3, 1, 3, 4, 2]) == 3
    print("  ✅ find_duplicate: standard / different position")

    print("\n🎉 All linked list tests passed!")


if __name__ == "__main__":
    run_tests()
