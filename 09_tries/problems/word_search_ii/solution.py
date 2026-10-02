
from fundamentals.trie.solution import Trie, TrieNode

def word_search_ii(board: list[list[str]], words: list[str]) -> list[str]:
    """🔴 Word Search II (LC #212) — Trie + DFS backtracking"""
    trie = Trie()
    for w in words: trie.insert(w)
    rows, cols = len(board), len(board[0])
    found = set()

    def dfs(node: TrieNode, r: int, c: int, path: str):
        if r<0 or r>=rows or c<0 or c>=cols or board[r][c] not in node.children: return
        ch = board[r][c]; node = node.children[ch]; path += ch
        if node.is_end: found.add(path)
        board[r][c] = '#'
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(node, r+dr, c+dc, path)
        board[r][c] = ch

    for r in range(rows):
        for c in range(cols): dfs(trie.root, r, c, "")
    return list(found)
