
def pacific_atlantic(heights: list[list[int]]) -> list[list[int]]:
    """🟡 Pacific Atlantic Water Flow (LC #417)"""
    rows, cols = len(heights), len(heights[0])
    pac, atl = set(), set()
    def dfs(r,c,visited,prev):
        if (r,c) in visited or r<0 or r>=rows or c<0 or c>=cols or heights[r][c]<prev: return
        visited.add((r,c))
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(r+dr,c+dc,visited,heights[r][c])
    for r in range(rows): dfs(r,0,pac,heights[r][0]); dfs(r,cols-1,atl,heights[r][cols-1])
    for c in range(cols): dfs(0,c,pac,heights[0][c]); dfs(rows-1,c,atl,heights[rows-1][c])
    return [[r,c] for r in range(rows) for c in range(cols) if (r,c) in pac and (r,c) in atl]
