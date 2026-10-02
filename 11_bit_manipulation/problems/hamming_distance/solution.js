import { countBits } from '../../fundamentals/count_bits/solution.js';

/**
 * 🟢 Hamming Distance (LC #461) — count positions where bits differ
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export const hammingDistance = (x, y) => countBits(x ^ y);
