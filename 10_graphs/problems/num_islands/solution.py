
def num_islands(grid: list[list[str]]) -> int:
    """🟡 Number of Islands (LC #200)"""
    rows, cols, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if r<0 or r>=rows or c<0 or c>=cols or grid[r][c]!='1': return
        grid[r][c]='0'
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(r+dr,c+dc)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c]=='1': dfs(r,c); count+=1
    return count
