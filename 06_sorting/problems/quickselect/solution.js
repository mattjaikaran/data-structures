/** 🟡 Kth smallest via quickselect
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export const quickselect = (nums, k) => {
  const a = [...nums];
  const partition = (lo, hi) => {
    const p = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++)
      if (a[j] <= p) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
      }
    [a[i], a[hi]] = [a[hi], a[i]];
    return i;
  };
  const select = (lo, hi, k) => {
    if (lo === hi) return a[lo];
    const p = partition(lo, hi);
    if (k === p) return a[k];
    return k < p ? select(lo, p - 1, k) : select(p + 1, hi, k);
  };
  return select(0, a.length - 1, k - 1);
};
