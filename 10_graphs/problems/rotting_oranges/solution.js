export function rottingOranges(grid) {
  const rows = grid.length, columns = grid[0]?.length ?? 0;
  const queue = [];
  let fresh = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < columns; c++) {
    if (grid[r][c] === 2) queue.push(r * columns + c);
    else if (grid[r][c] === 1) fresh++;
  }
  let head = 0, minutes = 0;
  while (head < queue.length && fresh > 0) {
    const end = queue.length;
    while (head < end) {
      const cell = queue[head++], r = Math.floor(cell / columns), c = cell % columns;
      for (let direction = 0; direction < 4; direction++) {
        const nr = r + (direction === 0 ? -1 : direction === 1 ? 1 : 0);
        const nc = c + (direction === 2 ? -1 : direction === 3 ? 1 : 0);
        if (nr >= 0 && nr < rows && nc >= 0 && nc < columns && grid[nr][nc] === 1) {
          grid[nr][nc] = 2; fresh--; queue.push(nr * columns + nc);
        }
      }
    }
    minutes++;
  }
  return fresh === 0 ? minutes : -1;
}
