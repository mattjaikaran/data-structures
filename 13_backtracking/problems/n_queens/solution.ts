export function nQueens(n: number): string[][] {
  const result: string[][] = [];
  const cols = new Set<number>(), d1 = new Set<number>(), d2 = new Set<number>();
  const bt = (row: number, board: string[][]) => {
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
