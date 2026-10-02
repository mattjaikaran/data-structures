/** 🔴 Merge K Sorted Lists (LC #23)
 * @param {number[][]} lists
 * @returns {number[]}
 */
export function mergeKSorted(lists) {
  const h = [];
  const push = (v, i, j) => {
    h.push([v, i, j]);
    h.sort((a, b) => a[0] - b[0]);
  };
  lists.forEach((lst, i) => {
    if (lst.length) push(lst[0], i, 0);
  });
  const result = [];
  while (h.length) {
    const [val, i, j] = h.shift();
    result.push(val);
    if (j + 1 < lists[i].length) push(lists[i][j + 1], i, j + 1);
  }
  return result;
}
