

def n_queens(n: int) -> list[list[str]]:
    """🔴 N-Queens (LC #51) — place n queens, none attacking"""
    result = []
    cols = set(); diag1 = set(); diag2 = set()  # col, row-col, row+col

    def bt(row, board):
        if row == n:
            result.append([''.join(r) for r in board])
            return
        for col in range(n):
            if col in cols or (row-col) in diag1 or (row+col) in diag2:
                continue
            cols.add(col); diag1.add(row-col); diag2.add(row+col)
            board[row][col] = 'Q'
            bt(row + 1, board)
            board[row][col] = '.'
            cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)

    bt(0, [['.']*n for _ in range(n)])
    return result
