/** @param {number[]} arr
 * @returns {number[]}
 */
export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const merge = (l, r) => {
    const res = [];
    let i = 0,
      j = 0;
    while (i < l.length && j < r.length)
      res.push(l[i] <= r[j] ? l[i++] : r[j++]);
    return [...res, ...l.slice(i), ...r.slice(j)];
  };
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};
