pub fn num_islands(grid: &mut Vec<Vec<char>>) -> i32 {
    let (rows, cols) = (grid.len(), grid[0].len()); let mut count = 0;
    fn dfs(g: &mut Vec<Vec<char>>, r: usize, c: usize) {
        if g[r][c] != '1' { return; } g[r][c] = '0';
        if r > 0 { dfs(g, r-1, c); } if r+1 < g.len() { dfs(g, r+1, c); }
        if c > 0 { dfs(g, r, c-1); } if c+1 < g[0].len() { dfs(g, r, c+1); }
    }
    for r in 0..rows { for c in 0..cols { if grid[r][c]=='1' { dfs(grid,r,c); count+=1; } } }
    count
}

#[cfg(test)]
mod num_islands_tests {
    use super::*;

    #[test]
    fn test_num_islands() {
            let mut grid = vec![vec!['1','1','0'],vec!['0','1','0'],vec!['0','0','1']];
            assert_eq!(num_islands(&mut grid), 2);
        }
}
