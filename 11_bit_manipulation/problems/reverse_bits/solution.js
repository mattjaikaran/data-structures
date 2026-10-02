/**
 * 🟢 Reverse Bits (LC #190) — reverse 32-bit unsigned integer
 * @param {number} n
 * @returns {number}
 */
export const reverseBits = (n) => {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n >>>= 1;
  }
  return res >>> 0;
};
