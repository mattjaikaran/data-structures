

def word_search(board: list[list[str]], word: str) -> bool:
    """🟡 Word Search (LC #79) — find word in grid"""
    rows, cols = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word): return True
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[i]:
            return False
        tmp, board[r][c] = board[r][c], '#'  # mark visited
        found = any(dfs(r+dr, c+dc, i+1) for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)])
        board[r][c] = tmp  # restore
        return found
    return any(dfs(r, c, 0) for r in range(rows) for c in range(cols))
