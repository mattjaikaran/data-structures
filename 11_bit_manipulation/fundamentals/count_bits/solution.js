/**
 * @param {number} n
 * @returns {number}
 */
export const countBits = (n) => {
  let c = 0;
  while (n) {
    n &= n - 1;
    c++;
  }
  return c;
};
