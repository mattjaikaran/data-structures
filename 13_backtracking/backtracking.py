"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKTRACKING  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Backtracking = DFS + undo.
Template: choose → explore → unchoose.
Key insight: prune early to avoid exploring dead branches.

When to use:
  - "Find ALL solutions" (not just one)
  - Constraint satisfaction (Sudoku, N-Queens)
  - Combinations / permutations / subsets
  - Path finding with constraints
"""


# ━━ SUBSETS / COMBINATIONS / PERMUTATIONS ━━━━━━━━━

def subsets(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets (LC #78) — power set, no duplicates in input"""
    result = []
    def bt(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            bt(i + 1, path)
            path.pop()
    bt(0, [])
    return result

def subsets_with_dup(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets II (LC #90) — input may have duplicates"""
    nums.sort()
    result = []
    def bt(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i-1]: continue  # skip dup
            path.append(nums[i])
            bt(i + 1, path)
            path.pop()
    bt(0, [])
    return result

def combinations(n: int, k: int) -> list[list[int]]:
    """🟡 Combinations (LC #77) — choose k from 1..n"""
    result = []
    def bt(start, path):
        if len(path) == k: result.append(path[:]); return
        for i in range(start, n + 1):
            # pruning: not enough numbers left
            if n - i + 1 < k - len(path): break
            path.append(i)
            bt(i + 1, path)
            path.pop()
    bt(1, [])
    return result

def combination_sum(candidates: list[int], target: int) -> list[list[int]]:
    """🟡 Combination Sum (LC #39) — reuse allowed, distinct candidates"""
    result = []
    candidates.sort()
    def bt(start, path, remaining):
        if remaining == 0: result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break  # pruning (sorted)
            path.append(candidates[i])
            bt(i, path, remaining - candidates[i])  # i not i+1 = reuse allowed
            path.pop()
    bt(0, [], target)
    return result

def combination_sum_ii(candidates: list[int], target: int) -> list[list[int]]:
    """🟡 Combination Sum II (LC #40) — no reuse, may have duplicates"""
    candidates.sort()
    result = []
    def bt(start, path, remaining):
        if remaining == 0: result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break
            if i > start and candidates[i] == candidates[i-1]: continue  # skip dup
            path.append(candidates[i])
            bt(i + 1, path, remaining - candidates[i])
            path.pop()
    bt(0, [], target)
    return result

def permutations(nums: list[int]) -> list[list[int]]:
    """🟡 Permutations (LC #46)"""
    result = []
    def bt(path, used):
        if len(path) == len(nums): result.append(path[:]); return
        for i, n in enumerate(nums):
            if used[i]: continue
            used[i] = True
            path.append(n)
            bt(path, used)
            path.pop()
            used[i] = False
    bt([], [False] * len(nums))
    return result

def permutations_ii(nums: list[int]) -> list[list[int]]:
    """🟡 Permutations II (LC #47) — may contain duplicates"""
    nums.sort()
    result = []
    def bt(path, used):
        if len(path) == len(nums): result.append(path[:]); return
        for i in range(len(nums)):
            if used[i]: continue
            # skip duplicate: same value AND previous same value not used
            if i > 0 and nums[i] == nums[i-1] and not used[i-1]: continue
            used[i] = True
            path.append(nums[i])
            bt(path, used)
            path.pop()
            used[i] = False
    bt([], [False] * len(nums))
    return result


# ━━ CLASSIC CONSTRAINT PROBLEMS ━━━━━━━━━━━━━━━━━━━

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

def n_queens_count(n: int) -> int:
    """🔴 N-Queens II (LC #52) — count solutions only"""
    count = [0]
    cols = set(); diag1 = set(); diag2 = set()
    def bt(row):
        if row == n: count[0] += 1; return
        for col in range(n):
            if col in cols or (row-col) in diag1 or (row+col) in diag2: continue
            cols.add(col); diag1.add(row-col); diag2.add(row+col)
            bt(row + 1)
            cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)
    bt(0)
    return count[0]

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

def letter_combinations(digits: str) -> list[str]:
    """🟡 Letter Combinations of a Phone Number (LC #17)"""
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = []
    def bt(i, path):
        if i == len(digits): result.append(''.join(path)); return
        for c in phone[digits[i]]:
            path.append(c); bt(i+1, path); path.pop()
    bt(0, [])
    return result

def palindrome_partitioning(s: str) -> list[list[str]]:
    """🟡 Palindrome Partitioning (LC #131)"""
    result = []
    def is_pal(sub): return sub == sub[::-1]
    def bt(start, path):
        if start == len(s): result.append(path[:]); return
        for end in range(start+1, len(s)+1):
            sub = s[start:end]
            if is_pal(sub):
                path.append(sub); bt(end, path); path.pop()
    bt(0, [])
    return result

def restore_ip_addresses(s: str) -> list[str]:
    """🟡 Restore IP Addresses (LC #93)"""
    result = []
    def bt(start, parts):
        if len(parts) == 4:
            if start == len(s): result.append('.'.join(parts))
            return
        for length in range(1, 4):
            if start + length > len(s): break
            segment = s[start:start+length]
            if len(segment) > 1 and segment[0] == '0': break  # leading zero
            if int(segment) > 255: break
            parts.append(segment)
            bt(start + length, parts)
            parts.pop()
    bt(0, [])
    return result

def expression_add_operators(num: str, target: int) -> list[str]:
    """🔴 Expression Add Operators (LC #282)"""
    result = []
    def bt(i, path, val, last):
        if i == len(num):
            if val == target: result.append(path)
            return
        for j in range(i, len(num)):
            seg = num[i:j+1]
            if len(seg) > 1 and seg[0] == '0': break  # no leading zeros
            n = int(seg)
            if i == 0:
                bt(j+1, seg, n, n)
            else:
                bt(j+1, path+'+'+seg, val+n, n)
                bt(j+1, path+'-'+seg, val-n, -n)
                bt(j+1, path+'*'+seg, val-last+last*n, last*n)
    bt(0, '', 0, 0)
    return result

def remove_invalid_parentheses(s: str) -> list[str]:
    """🔴 Remove Invalid Parentheses (LC #301)"""
    result = set()
    min_removed = [float('inf')]

    def bt(i, left, right, removed, path):
        if i == len(s):
            if left == right:
                if removed < min_removed[0]:
                    min_removed[0] = removed; result.clear()
                if removed == min_removed[0]:
                    result.add(path)
            return
        c = s[i]
        if c not in '()':
            bt(i+1, left, right, removed, path+c)
        else:
            # skip this char (remove it)
            bt(i+1, left, right, removed+1, path)
            # keep this char
            if c == '(':
                bt(i+1, left+1, right, removed, path+c)
            elif right < left:  # only add ')' if it closes an open one
                bt(i+1, left, right+1, removed, path+c)

    bt(0, 0, 0, 0, '')
    return list(result)


# ━━ Tests ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def run_tests():
    print("Running backtracking tests...\n")

    assert len(subsets([1,2,3])) == 8
    assert [] in subsets([1,2,3]) and [1,2,3] in subsets([1,2,3])
    print("  ✅ subsets: count / empty / full")

    assert len(subsets_with_dup([1,2,2])) == 6
    print("  ✅ subsets_with_dup: deduplication")

    assert len(combinations(4,2)) == 6
    assert [1,2] in combinations(4,2)
    print("  ✅ combinations")

    cs = combination_sum([2,3,6,7], 7)
    assert [7] in cs and [2,2,3] in cs and len(cs) == 2
    print("  ✅ combination_sum: reuse allowed")

    cs2 = combination_sum_ii([10,1,2,7,6,1,5], 8)
    assert [1,1,6] in cs2 and [1,2,5] in cs2 and [1,7] in cs2 and [2,6] in cs2
    print("  ✅ combination_sum_ii: no reuse, dedup")

    perms = permutations([1,2,3])
    assert len(perms) == 6 and [1,2,3] in perms and [3,2,1] in perms
    print("  ✅ permutations")

    perms2 = permutations_ii([1,1,2])
    assert len(perms2) == 3
    print("  ✅ permutations_ii: deduplication")

    queens = n_queens(4)
    assert len(queens) == 2
    print("  ✅ n_queens: 4×4 has 2 solutions")

    assert n_queens_count(8) == 92
    print("  ✅ n_queens_count: 8-queens = 92")

    board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    solve_sudoku(board)
    assert board[0][2] == '4'  # known solution value
    print("  ✅ solve_sudoku")

    grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
    assert word_search([row[:] for row in grid], "ABCCED")
    assert not word_search([row[:] for row in grid], "ABCB")
    print("  ✅ word_search: found / not found")

    lc = sorted(letter_combinations("23"))
    assert lc == sorted(["ad","ae","af","bd","be","bf","cd","ce","cf"])
    print("  ✅ letter_combinations")

    pp = palindrome_partitioning("aab")
    assert ["a","a","b"] in pp and ["aa","b"] in pp
    print("  ✅ palindrome_partitioning")

    ip = restore_ip_addresses("25525511135")
    assert "255.255.11.135" in ip and "255.255.111.35" in ip
    print("  ✅ restore_ip_addresses")

    ops = expression_add_operators("123", 6)
    assert "1+2+3" in ops and "1*2*3" in ops
    print("  ✅ expression_add_operators")

    rip = remove_invalid_parentheses("()())()")
    assert "(())()" in rip or "()(())" in rip or "()()()" in rip
    print("  ✅ remove_invalid_parentheses")

    print("\n🎉 All backtracking tests passed!")

if __name__ == "__main__":
    run_tests()
