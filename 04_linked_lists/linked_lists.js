"use strict";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * LINKED LISTS  ·  JavaScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * VARIANTS
 *   Singly   — node has `next` only
 *   Doubly   — node has `prev` and `next`
 *   Circular — tail.next points back to head
 *
 * COMPLEXITY
 *   Access by index:             O(n)
 *   Search:                      O(n)
 *   Insert / delete at head:     O(1)
 *   Insert / delete at tail:     O(1) with tail pointer
 *   Delete given node ref:       O(1) doubly / O(n) singly
 *
 * CORE PATTERNS
 *   • Fast & Slow Pointers (Floyd's)
 *   • Dummy head node
 *   • In-place reversal (3-pointer)
 *   • Two-pass for nth-from-end
 *   • Divide & conquer merge
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. Singly Linked List                       │
// │    - SNode, SinglyLinkedList                │
// │ 2. Doubly Linked List + LRU Cache           │
// │    - DNode, DoublyLinkedList, LRUCache       │
// │ 3. Algorithm Helpers                        │
// │    - fromArray, toArray, reverseList         │
// │    - hasCycle, findMiddle, mergeSorted      │
// │ 4. Interview Problems                       │
// │    - removeDuplicates                 (🟢)  │
// │    - removeNthFromEnd, reorderList          │
// │      addTwoNumbers, swapPairs, sortList     │
// │      findDuplicate                   (🟡)   │
// │    - reverseKGroup, mergeKLists             │
// │      detectCycleNode                 (🔴)   │
// │ 5. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════════════
// PART 1 — SINGLY LINKED LIST
// ══════════════════════════════════════════════

class SNode {
  /**
   * @param {number} val
   * @param {SNode | null} [next=null]
   */
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  /** @type {SNode | null} */
  head = null;
  /** @type {SNode | null} */
  tail = null;
  /** @type {number} */
  #size = 0;

  get size() { return this.#size; }

  /** @param {number} val */
  prepend(val) {
    const node = new SNode(val, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    this.#size++;
  }

  /** @param {number} val */
  append(val) {
    const node = new SNode(val);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this.#size++;
  }

  popFront() {
    if (!this.head) throw new Error("Empty list");
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.#size--;
    return val;
  }

  /** @param {number} val */
  removeValue(val) {
    if (!this.head) return false;
    if (this.head.val === val) { this.popFront(); return true; }
    let prev = this.head, cur = this.head.next;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        if (cur === this.tail) this.tail = prev;
        this.#size--;
        return true;
      }
      prev = cur;
      cur = cur.next;
    }
    return false;
  }

  reverse() {
    let prev = null, cur = this.head;
    this.tail = this.head;
    while (cur) {
      const nxt = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nxt;
    }
    this.head = prev;
  }

  /** @returns {number[]} */
  toArray() {
    const result = [];
    let cur = this.head;
    while (cur) { result.push(cur.val); cur = cur.next; }
    return result;
  }
}

// ══════════════════════════════════════════════
// PART 2 — DOUBLY LINKED LIST  +  LRU CACHE
// ══════════════════════════════════════════════

class DNode {
  /**
   * @param {number} [key=0]
   * @param {number} [val=0]
   */
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  /** @type {DNode} */
  #head;
  /** @type {DNode} */
  #tail;
  /** @type {number} */
  #size = 0;

  constructor() {
    this.#head = new DNode();
    this.#tail = new DNode();
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
  }

  get size() { return this.#size; }

  /**
   * @param {number} key
   * @param {number} val
   * @returns {DNode}
   */
  appendFront(key, val) {
    return this.#insertAfter(this.#head, key, val);
  }

  /** O(1) removal of any node — the DLL superpower */
  /** @param {DNode} node */
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.#size--;
  }

  /** @returns {DNode} */
  removeBack() {
    const node = this.#tail.prev;
    this.removeNode(node);
    return node;
  }

  /** @returns {DNode} */
  peekBack() {
    return this.#tail.prev;
  }

  /**
   * @param {DNode} ref
   * @param {number} key
   * @param {number} val
   * @returns {DNode}
   */
  #insertAfter(ref, key, val) {
    const node = new DNode(key, val);
    node.prev = ref;
    node.next = ref.next;
    ref.next.prev = node;
    ref.next = node;
    this.#size++;
    return node;
  }
}

class LRUCache {
  /** @type {number} */
  #cap;
  /** @type {Map<number, DNode>} */
  #map;
  /** @type {DoublyLinkedList} */
  #list;

  /** @param {number} capacity */
  constructor(capacity) {
    this.#cap = capacity;
    this.#map = new Map();
    this.#list = new DoublyLinkedList();
  }

  /** @param {number} key */
  get(key) {
    if (!this.#map.has(key)) return -1;
    const node = this.#map.get(key);
    this.#list.removeNode(node);
    const fresh = this.#list.appendFront(key, node.val);
    this.#map.set(key, fresh);
    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    if (this.#map.has(key)) this.#list.removeNode(this.#map.get(key));
    else if (this.#list.size === this.#cap) {
      const lru = this.#list.removeBack();
      this.#map.delete(lru.key);
    }
    const node = this.#list.appendFront(key, value);
    this.#map.set(key, node);
  }
}

// ══════════════════════════════════════════════
// PART 3 — HELPERS (operate on raw SNode chains)
// ══════════════════════════════════════════════

/** @param {number[]} vals */
function fromArray(vals) {
  const dummy = new SNode(0);
  let cur = dummy;
  for (const v of vals) { cur.next = new SNode(v); cur = cur.next; }
  return dummy.next;
}

/** @param {SNode | null} head */
function toArray(head) {
  const result = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}

/** @param {SNode | null} head */
function reverseList(head) {
  let prev = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

/** @param {SNode | null} head */
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

/** @param {SNode | null} head */
function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/**
 * @param {SNode | null} l1
 * @param {SNode | null} l2
 */
function mergeSorted(l1, l2) {
  const dummy = new SNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) { cur.next = l1; l1 = l1.next; }
    else { cur.next = l2; l2 = l2.next; }
    cur = cur.next;
  }
  cur.next = l1 ?? l2;
  return dummy.next;
}

// ══════════════════════════════════════════════
// PART 4 — INTERVIEW PROBLEMS
// ══════════════════════════════════════════════

// ── 🟢 Easy ────────────────────────────────────

/** 🟢 Remove Duplicates from Sorted List (LC #83) */
/** @param {SNode | null} head */
function removeDuplicates(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}

// ── 🟡 Medium ──────────────────────────────────

/** 🟡 Remove Nth Node From End (LC #19) */
/**
 * @param {SNode | null} head
 * @param {number} n
 */
function removeNthFromEnd(head, n) {
  const dummy = new SNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i <= n; i++) fast = fast.next;
  while (fast) { fast = fast.next; slow = slow.next; }
  slow.next = slow.next.next;
  return dummy.next;
}

/** 🟡 Reorder List (LC #143) */
/** @param {SNode | null} head */
function reorderList(head) {
  if (!head?.next) return;
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null, cur = slow.next;
  slow.next = null;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  let first = head, second = prev;
  while (second) {
    const t1 = first.next;
    const t2 = second.next;
    first.next = second;
    second.next = t1;
    first = t1;
    second = t2;
  }
}

/** 🟡 Add Two Numbers (LC #2) */
/**
 * @param {SNode | null} l1
 * @param {SNode | null} l2
 */
function addTwoNumbers(l1, l2) {
  const dummy = new SNode(0);
  let cur = dummy, carry = 0;
  while (l1 || l2 || carry) {
    let val = carry;
    if (l1) { val += l1.val; l1 = l1.next; }
    if (l2) { val += l2.val; l2 = l2.next; }
    carry = Math.floor(val / 10);
    cur.next = new SNode(val % 10);
    cur = cur.next;
  }
  return dummy.next;
}

/** 🟡 Swap Nodes in Pairs (LC #24) */
/** @param {SNode | null} head */
function swapPairs(head) {
  const dummy = new SNode(0, head);
  let prev = dummy;
  while (prev.next && prev.next.next) {
    const a = prev.next;
    const b = prev.next.next;
    prev.next = b;
    a.next = b.next;
    b.next = a;
    prev = a;
  }
  return dummy.next;
}

/** 🟡 Sort List (LC #148) — merge sort */
/** @param {SNode | null} head */
function sortList(head) {
  if (!head?.next) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  const mid = slow.next;
  slow.next = null;
  return mergeSorted(sortList(head), sortList(mid));
}

/** 🟡 Find the Duplicate Number (LC #287) — Floyd's on array-as-list */
/** @param {number[]} nums */
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }
  return slow;
}

// ── 🔴 Hard ────────────────────────────────────

/** 🔴 Reverse Nodes in k-Group (LC #25) */
/**
 * @param {SNode | null} head
 * @param {number} k
 */
function reverseKGroup(head, k) {
  let count = 0, node = head;
  while (node && count < k) { node = node.next; count++; }
  if (count < k) return head;
  let prev = null, cur = head;
  for (let i = 0; i < k; i++) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  head.next = reverseKGroup(cur, k);
  return prev;
}

/** 🔴 Merge K Sorted Lists (LC #23) — divide & conquer */
/** @param {(SNode | null)[]} lists */
function mergeKLists(lists) {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  return mergeSorted(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
}

/** 🔴 Linked List Cycle II (LC #142) — find cycle entry node */
/** @param {SNode | null} head */
function detectCycleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) { slow = slow.next; fast = fast.next; }
      return slow;
    }
  }
  return null;
}

// ══════════════════════════════════════════════
// PART 5 — TESTS
// ══════════════════════════════════════════════

/**
 * @param {unknown} a
 * @param {unknown} b
 */
function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTests() {
  const ll = new SinglyLinkedList();
  [1, 2, 3, 4, 5].forEach(v => ll.append(v));
  console.assert(deepEq(ll.toArray(), [1, 2, 3, 4, 5]), "sll append");
  ll.prepend(0);
  console.assert(deepEq(ll.toArray(), [0, 1, 2, 3, 4, 5]), "sll prepend");
  console.assert(ll.popFront() === 0, "sll popFront");
  ll.removeValue(3);
  console.assert(deepEq(ll.toArray(), [1, 2, 4, 5]), "sll removeValue");
  ll.reverse();
  console.assert(deepEq(ll.toArray(), [5, 4, 2, 1]), "sll reverse");

  const dll = new DoublyLinkedList();
  dll.appendFront(0, 0);
  dll.appendFront(1, 1);
  console.assert(dll.size === 2, "dll size");
  dll.removeBack();
  console.assert(dll.size === 1, "dll removeBack");

  const lru = new LRUCache(2);
  lru.put(1, 1);
  lru.put(2, 2);
  console.assert(lru.get(1) === 1, "lru get hit");
  lru.put(3, 3);
  console.assert(lru.get(2) === -1, "lru evict 2");
  lru.put(4, 4);
  console.assert(lru.get(1) === -1, "lru evict 1");
  console.assert(lru.get(3) === 3, "lru get 3");
  console.assert(lru.get(4) === 4, "lru get 4");

  console.assert(deepEq(toArray(reverseList(fromArray([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]), "reverse std");
  console.assert(deepEq(toArray(reverseList(fromArray([1]))), [1]), "reverse single");
  console.assert(reverseList(null) === null, "reverse null");

  console.assert(!hasCycle(fromArray([1, 2, 3])), "no cycle");
  const n1 = new SNode(1), n2 = new SNode(2), n3 = new SNode(3);
  n1.next = n2;
  n2.next = n3;
  n3.next = n2;
  console.assert(hasCycle(n1), "has cycle");
  console.assert(!hasCycle(null), "null no cycle");

  const m1 = findMiddle(fromArray([1, 2, 3, 4, 5]));
  const m2 = findMiddle(fromArray([1, 2, 3, 4]));
  const m3 = findMiddle(fromArray([1]));
  console.assert(m1 && m1.val === 3, "middle odd");
  console.assert(m2 && m2.val === 3, "middle even");
  console.assert(m3 && m3.val === 1, "middle single");

  console.assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
  console.assert(deepEq(toArray(mergeSorted(null, fromArray([1]))), [1]), "merge null left");

  console.assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 2, 3, 3]))), [1, 2, 3]), "dedup");
  console.assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 1]))), [1]), "dedup all same");

  console.assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]), "nth from end");
  console.assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2]), 1)), [1]), "nth tail");
  console.assert(deepEq(toArray(removeNthFromEnd(fromArray([1]), 1)), []), "nth only node");

  console.assert(deepEq(toArray(addTwoNumbers(fromArray([2, 4, 3]), fromArray([5, 6, 4]))), [7, 0, 8]), "add nums");
  console.assert(deepEq(toArray(addTwoNumbers(fromArray([0]), fromArray([0]))), [0]), "add zeros");
  console.assert(deepEq(toArray(addTwoNumbers(fromArray([9, 9, 9]), fromArray([1]))), [0, 0, 0, 1]), "add carry");

  console.assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]), "swap even");
  console.assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3]))), [2, 1, 3]), "swap odd");
  console.assert(deepEq(toArray(swapPairs(fromArray([1]))), [1]), "swap single");

  const r1 = fromArray([1, 2, 3, 4, 5]);
  reorderList(r1);
  console.assert(deepEq(toArray(r1), [1, 5, 2, 4, 3]), "reorder odd");
  const r2 = fromArray([1, 2, 3, 4]);
  reorderList(r2);
  console.assert(deepEq(toArray(r2), [1, 4, 2, 3]), "reorder even");

  console.assert(deepEq(toArray(sortList(fromArray([4, 2, 1, 3]))), [1, 2, 3, 4]), "sort list");
  console.assert(deepEq(toArray(sortList(fromArray([-1, 5, 3, 4, 0]))), [-1, 0, 3, 4, 5]), "sort negatives");

  console.assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 2)), [2, 1, 4, 3, 5]), "k=2");
  console.assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 3)), [3, 2, 1, 4, 5]), "k=3");
  console.assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 1)), [1, 2, 3, 4, 5]), "k=1");

  const kl = [fromArray([1, 4, 5]), fromArray([1, 3, 4]), fromArray([2, 6])];
  console.assert(deepEq(toArray(mergeKLists(kl)), [1, 1, 2, 3, 4, 4, 5, 6]), "merge k lists");
  console.assert(mergeKLists([]) === null, "merge k empty");

  console.assert(findDuplicate([1, 3, 4, 2, 2]) === 2, "duplicate 1");
  console.assert(findDuplicate([3, 1, 3, 4, 2]) === 3, "duplicate 2");

  console.log("✓ linked_lists — all tests passed");
}

runTests();
