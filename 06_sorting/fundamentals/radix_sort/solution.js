/** @param {number[]} arr
 * @returns {number[]}
 */
export const radixSort = (arr) => {
  if (!arr.length) return [];
  let a = [...arr];
  let exp = 1;
  const max = Math.max(...a);
  while (Math.floor(max / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const n of a) buckets[Math.floor(n / exp) % 10].push(n);
    a = buckets.flat();
    exp *= 10;
  }
  return a;
};
