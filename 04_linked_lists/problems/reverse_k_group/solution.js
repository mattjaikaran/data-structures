/**
 * @param {SNode | null} head
 * @param {number} k
 */
export function reverseKGroup(head, k) {
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
