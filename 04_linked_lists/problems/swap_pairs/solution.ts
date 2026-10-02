import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟡 Swap Nodes in Pairs (LC #24) */
export function swapPairs(head: SNode | null): SNode | null {
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
