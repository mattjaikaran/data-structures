import { mergeSorted } from '../../problems/merge_sorted/solution.js';

/** @param {(SNode | null)[]} lists */
export function mergeKLists(lists) {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  return mergeSorted(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
}
