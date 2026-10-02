pub fn n_queens(n: usize) -> Vec<Vec<String>> {
    let mut result = vec![];
    let mut cols = std::collections::HashSet::new();
    let mut d1 = std::collections::HashSet::new();
    let mut d2 = std::collections::HashSet::new();
    let mut board = vec![vec!['.'; n]; n];

    fn bt(n: usize, row: usize, board: &mut Vec<Vec<char>>,
          cols: &mut std::collections::HashSet<usize>,
          d1: &mut std::collections::HashSet<i32>,
          d2: &mut std::collections::HashSet<usize>,
          result: &mut Vec<Vec<String>>) {
        if row == n {
            result.push(board.iter().map(|r| r.iter().collect()).collect());
            return;
        }
        for col in 0..n {
            let diag1 = row as i32 - col as i32;
            let diag2 = row + col;
            if cols.contains(&col) || d1.contains(&diag1) || d2.contains(&diag2) { continue; }
            cols.insert(col); d1.insert(diag1); d2.insert(diag2);
            board[row][col] = 'Q'; bt(n, row+1, board, cols, d1, d2, result); board[row][col] = '.';
            cols.remove(&col); d1.remove(&diag1); d2.remove(&diag2);
        }
    }
    bt(n, 0, &mut board, &mut cols, &mut d1, &mut d2, &mut result); result
}

#[cfg(test)]
mod n_queens_tests {
    use super::*;

    #[test]
    fn test_n_queens() {
            assert_eq!(n_queens(4).len(), 2);
        }
}
