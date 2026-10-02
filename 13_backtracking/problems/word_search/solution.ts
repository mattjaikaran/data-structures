export function wordSearch(board: string[][], word: string): boolean {
  const [rows, cols] = [board.length, board[0].length];
  const dfs = (r: number, c: number, i: number): boolean => {
    if (i === word.length) return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) return false;
    const tmp = board[r][c]; board[r][c] = '#';
    const found = [[0,1],[0,-1],[1,0],[-1,0]].some(([dr,dc]) => dfs(r+dr,c+dc,i+1));
    board[r][c] = tmp; return found;
  };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (dfs(r,c,0)) return true;
  return false;
}
