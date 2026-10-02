/// Infect orthogonal neighbors in BFS layers, mutating a rectangular grid.
pub fn rotting_oranges(grid: &mut [Vec<i32>]) -> i32 {
    let rows = grid.len();
    let columns = grid.first().map_or(0, Vec::len);
    let mut queue = VecDeque::with_capacity(rows * columns);
    let mut fresh = 0;
    for (r, row) in grid.iter().enumerate() {
        for (c, &cell) in row.iter().enumerate() {
            if cell == 2 { queue.push_back(r * columns + c); }
            else if cell == 1 { fresh += 1; }
        }
    }
    let mut minutes = 0;
    while !queue.is_empty() && fresh > 0 {
        for _ in 0..queue.len() {
            let cell = queue.pop_front().unwrap();
            let (r, c) = ((cell / columns) as isize, (cell % columns) as isize);
            for (dr, dc) in [(-1, 0), (1, 0), (0, -1), (0, 1)] {
                let (nr, nc) = (r + dr, c + dc);
                if nr >= 0 && nc >= 0 && nr < rows as isize && nc < columns as isize && grid[nr as usize][nc as usize] == 1 {
                    grid[nr as usize][nc as usize] = 2;
                    fresh -= 1;
                    queue.push_back(nr as usize * columns + nc as usize);
                }
            }
        }
        minutes += 1;
    }
    if fresh == 0 { minutes } else { -1 }
}
#[cfg(test)]
mod rotting_oranges_tests {
    use super::*;
    #[test]
    fn waves_and_unreachable_cells() {
        let mut grid = vec![vec![2,1,1],vec![1,1,0],vec![0,1,1]];
        assert_eq!(rotting_oranges(&mut grid), 4);
        assert_eq!(grid, vec![vec![2,2,2],vec![2,2,0],vec![0,2,2]]);
        assert_eq!(rotting_oranges(&mut [vec![2,1,1,1,2]]), 2);
        assert_eq!(rotting_oranges(&mut [vec![2,0,1]]), -1);
        assert_eq!(rotting_oranges(&mut [vec![1]]), -1);
        assert_eq!(rotting_oranges(&mut [vec![0,2]]), 0);
        assert_eq!(rotting_oranges(&mut []), 0);
    }
}
