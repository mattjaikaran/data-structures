import { Trie, TrieNode } from '../../fundamentals/trie/solution.ts';

export function wordSearchII(board: string[][], words: string[]): string[] {
  const t = new Trie(); words.forEach(w => t.insert(w));
  const rows = board.length, cols = board[0].length, found = new Set<string>();
  const dfs = (node: TrieNode, r: number, c: number, path: string) => {
    if (r<0||r>=rows||c<0||c>=cols||!node.children.has(board[r][c])) return;
    const ch = board[r][c]; node = node.children.get(ch)!; path += ch;
    if (node.isEnd) found.add(path);
    board[r][c] = '#';
    for (const [dr,dc] of [[0,1],[0,-1],[1,0],[-1,0]]) dfs(node, r+dr, c+dc, path);
    board[r][c] = ch;
  };
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) dfs(t.root, r, c, '');
  return [...found];
}
