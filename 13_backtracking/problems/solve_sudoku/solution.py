

def solve_sudoku(board: list[list[str]]) -> None:
    """🔴 Sudoku Solver (LC #37) — modifies board in place"""
    def is_valid(row, col, ch):
        box_r, box_c = 3 * (row // 3), 3 * (col // 3)
        for i in range(9):
            if board[row][i] == ch: return False
            if board[i][col] == ch: return False
            if board[box_r + i//3][box_c + i%3] == ch: return False
        return True

    def bt():
        for r in range(9):
            for c in range(9):
                if board[r][c] != '.': continue
                for ch in '123456789':
                    if is_valid(r, c, ch):
                        board[r][c] = ch
                        if bt(): return True
                        board[r][c] = '.'
                return False  # no valid digit found
        return True  # all cells filled

    bt()
