import { Trie } from '../../fundamentals/trie/solution.js';

/**
 * 🔴 Word Search II (LC #212) — Trie + DFS backtracking
 * @param {string[][]} board
 * @param {string[]} words
 * @returns {string[]}
 */
export function wordSearchII(board, words) {
  const t = new Trie();
  words.forEach((w) => t.insert(w));
  const rows = board.length;
  const cols = board[0].length;
  const found = new Set();
  const dfs = (node, r, c, path) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || !node.children.has(board[r][c])) return;
    const ch = board[r][c];
    node = node.children.get(ch);
    path += ch;
    if (node.isEnd) found.add(path);
    board[r][c] = "#";
    for (const [dr, dc] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ])
      dfs(node, r + dr, c + dc, path);
    board[r][c] = ch;
  };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dfs(t.root, r, c, "");
  return [...found];
}
