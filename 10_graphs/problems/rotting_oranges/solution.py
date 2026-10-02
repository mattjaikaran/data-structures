from collections import deque

def rotting_oranges(grid: list[list[int]]) -> int:
    rows, columns = len(grid), len(grid[0]) if grid else 0
    queue = deque()
    fresh = 0
    for r in range(rows):
        for c in range(columns):
            if grid[r][c] == 2:
                queue.append(r * columns + c)
            elif grid[r][c] == 1:
                fresh += 1
    minutes = 0
    while queue and fresh:
        for _ in range(len(queue)):
            r, c = divmod(queue.popleft(), columns)
            for nr, nc in ((r-1,c),(r+1,c),(r,c-1),(r,c+1)):
                if 0 <= nr < rows and 0 <= nc < columns and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append(nr * columns + nc)
        minutes += 1
    return minutes if fresh == 0 else -1
