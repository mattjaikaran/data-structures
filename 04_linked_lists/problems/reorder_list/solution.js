/** @param {SNode | null} head */
export function reorderList(head) {
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
