/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * LINKED LISTS  ·  TypeScript
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

// ══════════════════════════════════════════════
// PART 1 — SINGLY LINKED LIST
// ══════════════════════════════════════════════

class SNode {
  val: number;
  next: SNode | null = null;
  constructor(val: number, next: SNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  head: SNode | null = null;
  tail: SNode | null = null;
  private _size = 0;

  get size(): number { return this._size; }

  prepend(val: number): void {
    const node = new SNode(val, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
  }

  append(val: number): void {
    const node = new SNode(val);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this._size++;
  }

  popFront(): number {
    if (!this.head) throw new Error("Empty list");
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this._size--;
    return val;
  }

  removeValue(val: number): boolean {
    if (!this.head) return false;
    if (this.head.val === val) { this.popFront(); return true; }
    let prev = this.head, cur = this.head.next;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        if (cur === this.tail) this.tail = prev;
        this._size--;
        return true;
      }
      prev = cur; cur = cur.next;
    }
    return false;
  }

  reverse(): void {
    let prev: SNode | null = null, cur = this.head;
    this.tail = this.head;
    while (cur) {
      const nxt = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nxt;
    }
    this.head = prev;
  }

  toArray(): number[] {
    const result: number[] = [];
    let cur = this.head;
    while (cur) { result.push(cur.val); cur = cur.next; }
    return result;
  }
}

// ══════════════════════════════════════════════
// PART 2 — DOUBLY LINKED LIST  +  LRU CACHE
// ══════════════════════════════════════════════

class DNode {
  key: number;
  val: number;
  prev: DNode | null = null;
  next: DNode | null = null;
  constructor(key = 0, val = 0) { this.key = key; this.val = val; }
}

class DoublyLinkedList {
  private head: DNode;   // sentinel
  private tail: DNode;   // sentinel
  private _size = 0;

  constructor() {
    this.head = new DNode();
    this.tail = new DNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get size(): number { return this._size; }

  appendFront(key: number, val: number): DNode {
    return this.insertAfter(this.head, key, val);
  }

  /** O(1) removal of any node — the DLL superpower */
  removeNode(node: DNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this._size--;
  }

  removeBack(): DNode {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }

  peekBack(): DNode { return this.tail.prev!; }

  private insertAfter(ref: DNode, key: number, val: number): DNode {
    const node = new DNode(key, val);
    node.prev = ref;
    node.next = ref.next;
    ref.next!.prev = node;
    ref.next = node;
    this._size++;
    return node;
  }
}

class LRUCache {
  private cap: number;
  private map: Map<number, DNode>;
  private list: DoublyLinkedList;

  constructor(capacity: number) {
    this.cap = capacity;
    this.map = new Map();
    this.list = new DoublyLinkedList();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.list.removeNode(node);
    const fresh = this.list.appendFront(key, node.val);
    this.map.set(key, fresh);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) this.list.removeNode(this.map.get(key)!);
    else if (this.list.size === this.cap) {
      const lru = this.list.removeBack();
      this.map.delete(lru.key);
    }
    const node = this.list.appendFront(key, value);
    this.map.set(key, node);
  }
}

// ══════════════════════════════════════════════
// PART 3 — HELPERS (operate on raw SNode chains)
// ══════════════════════════════════════════════

function fromArray(vals: number[]): SNode | null {
  const dummy = new SNode(0);
  let cur = dummy;
  for (const v of vals) { cur.next = new SNode(v); cur = cur.next; }
  return dummy.next;
}

function toArray(head: SNode | null): number[] {
  const result: number[] = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}

function reverseList(head: SNode | null): SNode | null {
  let prev: SNode | null = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

function hasCycle(head: SNode | null): boolean {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

function findMiddle(head: SNode | null): SNode | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeSorted(l1: SNode | null, l2: SNode | null): SNode | null {
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
function removeDuplicates(head: SNode | null): SNode | null {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}

// ── 🟡 Medium ──────────────────────────────────

/** 🟡 Remove Nth Node From End (LC #19) */
function removeNthFromEnd(head: SNode | null, n: number): SNode | null {
  const dummy = new SNode(0, head);
  let fast: SNode | null = dummy, slow: SNode | null = dummy;
  for (let i = 0; i <= n; i++) fast = fast!.next;
  while (fast) { fast = fast.next; slow = slow!.next; }
  slow!.next = slow!.next!.next;
  return dummy.next;
}

/** 🟡 Reorder List (LC #143) */
function reorderList(head: SNode | null): void {
  if (!head?.next) return;
  let slow = head, fast: SNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  // Reverse second half
  let prev: SNode | null = null, cur: SNode | null = slow.next;
  slow.next = null;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev; prev = cur; cur = nxt;
  }
  // Interleave
  let first: SNode | null = head, second: SNode | null = prev;
  while (second) {
    const t1: SNode | null = first!.next;
    const t2: SNode | null = second.next;
    first!.next = second;
    second.next = t1;
    first = t1; second = t2;
  }
}

/** 🟡 Add Two Numbers (LC #2) */
function addTwoNumbers(l1: SNode | null, l2: SNode | null): SNode | null {
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
function swapPairs(head: SNode | null): SNode | null {
  const dummy = new SNode(0, head);
  let prev: SNode = dummy;
  while (prev.next && prev.next.next) {
    const a: SNode = prev.next;
    const b: SNode = prev.next.next;
    prev.next = b; a.next = b.next; b.next = a;
    prev = a;
  }
  return dummy.next;
}

/** 🟡 Sort List (LC #148) — merge sort */
function sortList(head: SNode | null): SNode | null {
  if (!head?.next) return head;
  let slow = head, fast: SNode | null = head.next;
  while (fast && fast.next) { slow = slow.next!; fast = fast.next.next; }
  const mid = slow.next;
  slow.next = null;
  return mergeSorted(sortList(head), sortList(mid));
}

/** 🟡 Find the Duplicate Number (LC #287) — Floyd's on array-as-list */
function findDuplicate(nums: number[]): number {
  let slow = nums[0], fast = nums[0];
  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }
  return slow;
}

// ── 🔴 Hard ────────────────────────────────────

/** 🔴 Reverse Nodes in k-Group (LC #25) */
function reverseKGroup(head: SNode | null, k: number): SNode | null {
  let count = 0, node = head;
  while (node && count < k) { node = node.next; count++; }
  if (count < k) return head;
  let prev: SNode | null = null, cur: SNode | null = head;
  for (let i = 0; i < k; i++) {
    const nxt: SNode | null = cur!.next;
    cur!.next = prev; prev = cur!; cur = nxt;
  }
  head!.next = reverseKGroup(cur, k);
  return prev;
}

/** 🔴 Merge K Sorted Lists (LC #23) — divide & conquer */
function mergeKLists(lists: (SNode | null)[]): SNode | null {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  return mergeSorted(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
}

/** 🔴 Linked List Cycle II (LC #142) — find cycle entry node */
function detectCycleNode(head: SNode | null): SNode | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next; fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) { slow = slow!.next; fast = fast!.next; }
      return slow;
    }
  }
  return null;
}

// ══════════════════════════════════════════════
// PART 5 — TESTS
// ══════════════════════════════════════════════

function assert(cond: boolean, msg: string): void {
  if (!cond) throw new Error(`FAIL: ${msg}`);
}

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTests(): void {
  console.log("Running linked list tests...\n");

  // SinglyLinkedList
  const ll = new SinglyLinkedList();
  [1, 2, 3, 4, 5].forEach(v => ll.append(v));
  assert(deepEq(ll.toArray(), [1, 2, 3, 4, 5]), "sll append");
  ll.prepend(0);
  assert(deepEq(ll.toArray(), [0, 1, 2, 3, 4, 5]), "sll prepend");
  assert(ll.popFront() === 0, "sll popFront");
  ll.removeValue(3);
  assert(deepEq(ll.toArray(), [1, 2, 4, 5]), "sll removeValue");
  ll.reverse();
  assert(deepEq(ll.toArray(), [5, 4, 2, 1]), "sll reverse");
  console.log("  ✅ SinglyLinkedList: append / prepend / popFront / remove / reverse");

  // DoublyLinkedList
  const dll = new DoublyLinkedList();
  dll.appendFront(0, 0); dll.appendFront(1, 1);
  assert(dll.size === 2, "dll size");
  dll.removeBack();
  assert(dll.size === 1, "dll removeBack");
  console.log("  ✅ DoublyLinkedList: appendFront / removeBack / size");

  // LRU Cache
  const lru = new LRUCache(2);
  lru.put(1, 1); lru.put(2, 2);
  assert(lru.get(1) === 1, "lru get hit");
  lru.put(3, 3);                       // evicts key 2
  assert(lru.get(2) === -1, "lru evict 2");
  lru.put(4, 4);                       // evicts key 1
  assert(lru.get(1) === -1, "lru evict 1");
  assert(lru.get(3) === 3, "lru get 3");
  assert(lru.get(4) === 4, "lru get 4");
  console.log("  ✅ LRUCache: get / put / eviction order");

  // reverseList
  assert(deepEq(toArray(reverseList(fromArray([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]), "reverse std");
  assert(deepEq(toArray(reverseList(fromArray([1]))), [1]), "reverse single");
  assert(reverseList(null) === null, "reverse null");
  console.log("  ✅ reverseList: standard / single / null");

  // hasCycle
  assert(!hasCycle(fromArray([1, 2, 3])), "no cycle");
  const n1 = new SNode(1), n2 = new SNode(2), n3 = new SNode(3);
  n1.next = n2; n2.next = n3; n3.next = n2;
  assert(hasCycle(n1), "has cycle");
  assert(!hasCycle(null), "null no cycle");
  console.log("  ✅ hasCycle: no cycle / cycle / null");

  // findMiddle
  assert(findMiddle(fromArray([1, 2, 3, 4, 5]))!.val === 3, "middle odd");
  assert(findMiddle(fromArray([1, 2, 3, 4]))!.val === 3, "middle even");
  assert(findMiddle(fromArray([1]))!.val === 1, "middle single");
  console.log("  ✅ findMiddle: odd / even / single");

  // mergeSorted
  assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
  assert(deepEq(toArray(mergeSorted(null, fromArray([1]))), [1]), "merge null left");
  console.log("  ✅ mergeSorted: interleaved / null left");

  // removeDuplicates
  assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 2, 3, 3]))), [1, 2, 3]), "dedup");
  assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 1]))), [1]), "dedup all same");
  console.log("  ✅ removeDuplicates: mixed / all same");

  // removeNthFromEnd
  assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]), "nth from end");
  assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2]), 1)), [1]), "nth tail");
  assert(deepEq(toArray(removeNthFromEnd(fromArray([1]), 1)), []), "nth only node");
  console.log("  ✅ removeNthFromEnd: middle / tail / only node");

  // addTwoNumbers
  assert(deepEq(toArray(addTwoNumbers(fromArray([2, 4, 3]), fromArray([5, 6, 4]))), [7, 0, 8]), "add nums");
  assert(deepEq(toArray(addTwoNumbers(fromArray([0]), fromArray([0]))), [0]), "add zeros");
  assert(deepEq(toArray(addTwoNumbers(fromArray([9, 9, 9]), fromArray([1]))), [0, 0, 0, 1]), "add carry");
  console.log("  ✅ addTwoNumbers: basic / zero / carry propagation");

  // swapPairs
  assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]), "swap even");
  assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3]))), [2, 1, 3]), "swap odd");
  assert(deepEq(toArray(swapPairs(fromArray([1]))), [1]), "swap single");
  console.log("  ✅ swapPairs: even / odd / single");

  // reorderList
  const r1 = fromArray([1, 2, 3, 4, 5])!; reorderList(r1);
  assert(deepEq(toArray(r1), [1, 5, 2, 4, 3]), "reorder odd");
  const r2 = fromArray([1, 2, 3, 4])!; reorderList(r2);
  assert(deepEq(toArray(r2), [1, 4, 2, 3]), "reorder even");
  console.log("  ✅ reorderList: odd / even length");

  // sortList
  assert(deepEq(toArray(sortList(fromArray([4, 2, 1, 3]))), [1, 2, 3, 4]), "sort list");
  assert(deepEq(toArray(sortList(fromArray([-1, 5, 3, 4, 0]))), [-1, 0, 3, 4, 5]), "sort negatives");
  console.log("  ✅ sortList: standard / with negatives");

  // reverseKGroup
  assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 2)), [2, 1, 4, 3, 5]), "k=2");
  assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 3)), [3, 2, 1, 4, 5]), "k=3");
  assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 1)), [1, 2, 3, 4, 5]), "k=1");
  console.log("  ✅ reverseKGroup: k=2 / k=3 / k=1");

  // mergeKLists
  const kl = [fromArray([1, 4, 5]), fromArray([1, 3, 4]), fromArray([2, 6])];
  assert(deepEq(toArray(mergeKLists(kl)), [1, 1, 2, 3, 4, 4, 5, 6]), "merge k lists");
  assert(mergeKLists([]) === null, "merge k empty");
  console.log("  ✅ mergeKLists: standard / empty input");

  // findDuplicate
  assert(findDuplicate([1, 3, 4, 2, 2]) === 2, "duplicate 1");
  assert(findDuplicate([3, 1, 3, 4, 2]) === 3, "duplicate 2");
  console.log("  ✅ findDuplicate: standard / different position");

  console.log("\n🎉 All linked list tests passed!");
}

runTests();

export {
  SNode, SinglyLinkedList, DNode, DoublyLinkedList, LRUCache,
  fromArray, toArray, reverseList, hasCycle, findMiddle, mergeSorted,
  removeDuplicates, removeNthFromEnd, reorderList, addTwoNumbers,
  swapPairs, sortList, findDuplicate, reverseKGroup, mergeKLists, detectCycleNode,
};
