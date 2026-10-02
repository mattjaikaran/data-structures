/**
 * 🟢 Power of Four (LC #342) — power of 2, set bit at even position
 * @param {number} n
 * @returns {boolean}
 */
export const powerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
