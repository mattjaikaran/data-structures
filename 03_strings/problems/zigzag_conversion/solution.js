/**
 * @param {string} s
 * @param {number} numRows
 */
export function zigzagConversion(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;
  const rows = Array(numRows).fill("");
  let row = 0, step = 1;
  for (const c of s) {
    rows[row] += c;
    if (row === 0) step = 1;
    else if (row === numRows - 1) step = -1;
    row += step;
  }
  return rows.join("");
}
