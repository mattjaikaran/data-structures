/**
 * 🟡 Number of Islands (LC #200)
 * @param {string[][]} grid
 * @returns {number}
 */
export function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = "0";
    for (const [dr, dc] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ])
      dfs(r + dr, c + dc);
  };
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (grid[r][c] === "1") {
        dfs(r, c);
        count++;
      }
  return count;
}
