import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟡 Reorder List (LC #143) */
export function reorderList(head: SNode | null): void {
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
