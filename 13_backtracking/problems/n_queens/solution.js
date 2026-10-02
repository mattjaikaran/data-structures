/**
 * 🔴 nQueens (LC #51)
 * @param {number} n
 * @returns {string[][]}
 */
export function nQueens(n) {
  const result = [];
  const cols = new Set(), d1 = new Set(), d2 = new Set();
  const bt = (row, board) => {
    if (row === n) { result.push(board.map(r => r.join(''))); return; }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || d1.has(row-col) || d2.has(row+col)) continue;
      cols.add(col); d1.add(row-col); d2.add(row+col);
      board[row][col] = 'Q'; bt(row+1, board); board[row][col] = '.';
      cols.delete(col); d1.delete(row-col); d2.delete(row+col);
    }
  };
  bt(0, Array.from({length:n}, () => Array(n).fill('.'))); return result;
}
