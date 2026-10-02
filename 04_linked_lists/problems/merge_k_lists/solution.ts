import { mergeSorted } from '../../problems/merge_sorted/solution.ts';
import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🔴 Merge K Sorted Lists (LC #23) — divide & conquer */
export function mergeKLists(lists: (SNode | null)[]): SNode | null {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  return mergeSorted(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
}
