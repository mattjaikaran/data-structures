/** @param {number[]} arr
 * @returns {number[]}
 */
export const heapSort = (arr) => {
  const a = [...arr];
  const n = a.length;
  const heapify = (n, i) => {
    let m = i,
      l = 2 * i + 1,
      r = 2 * i + 2;
    if (l < n && a[l] > a[m]) m = l;
    if (r < n && a[r] > a[m]) m = r;
    if (m !== i) {
      [a[m], a[i]] = [a[i], a[m]];
      heapify(n, m);
    }
  };
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
  for (let i = n - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    heapify(i, 0);
  }
  return a;
};
