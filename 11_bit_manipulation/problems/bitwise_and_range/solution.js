/**
 * 🟡 Bitwise AND of Numbers Range (LC #201) — common prefix
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
export const bitwiseAndRange = (left, right) => {
  let shift = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};
