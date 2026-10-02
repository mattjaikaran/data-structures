import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🔴 Reverse Nodes in k-Group (LC #25) */
export function reverseKGroup(head: SNode | null, k: number): SNode | null {
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
