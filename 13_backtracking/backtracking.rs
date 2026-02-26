//! BACKTRACKING  ·  Rust
//! Choose → explore → unchoose. Prune early.
//! Rust note: backtracking with mutation requires careful ownership.
//! Pattern: pass &mut Vec and push/pop, or clone paths at leaf nodes.

pub fn subsets(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = vec![];
    fn bt(nums: &[i32], start: usize, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(path.clone());
        for i in start..nums.len() {
            path.push(nums[i]); bt(nums, i+1, path, result); path.pop();
        }
    }
    bt(nums, 0, &mut vec![], &mut result); result
}

pub fn subsets_with_dup(nums: &mut Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort();
    let mut result = vec![];
    fn bt(nums: &[i32], start: usize, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(path.clone());
        for i in start..nums.len() {
            if i > start && nums[i] == nums[i-1] { continue; }
            path.push(nums[i]); bt(nums, i+1, path, result); path.pop();
        }
    }
    bt(nums, 0, &mut vec![], &mut result); result
}

pub fn combination_sum(mut candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    candidates.sort();
    let mut result = vec![];
    fn bt(candidates: &[i32], start: usize, path: &mut Vec<i32>, rem: i32, result: &mut Vec<Vec<i32>>) {
        if rem == 0 { result.push(path.clone()); return; }
        for i in start..candidates.len() {
            if candidates[i] > rem { break; }
            path.push(candidates[i]); bt(candidates, i, path, rem-candidates[i], result); path.pop();
        }
    }
    bt(&candidates, 0, &mut vec![], target, &mut result); result
}

pub fn permutations(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = vec![];
    let mut used = vec![false; nums.len()];
    fn bt(nums: &[i32], used: &mut Vec<bool>, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if path.len() == nums.len() { result.push(path.clone()); return; }
        for i in 0..nums.len() {
            if used[i] { continue; }
            used[i] = true; path.push(nums[i]); bt(nums, used, path, result);
            path.pop(); used[i] = false;
        }
    }
    bt(nums, &mut used, &mut vec![], &mut result); result
}

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

pub fn letter_combinations(digits: &str) -> Vec<String> {
    if digits.is_empty() { return vec![]; }
    let phone = |c| match c { '2'=>"abc",'3'=>"def",'4'=>"ghi",'5'=>"jkl",
                               '6'=>"mno",'7'=>"pqrs",'8'=>"tuv",'9'=>"wxyz",_=>"" };
    let chars: Vec<char> = digits.chars().collect();
    let mut result = vec![];
    fn bt(chars: &[char], i: usize, path: &mut Vec<char>, result: &mut Vec<String>, phone: &dyn Fn(char)->&'static str) {
        if i == chars.len() { result.push(path.iter().collect()); return; }
        for c in phone(chars[i]).chars() { path.push(c); bt(chars, i+1, path, result, phone); path.pop(); }
    }
    bt(&chars, 0, &mut vec![], &mut result, &phone); result
}

pub fn restore_ip_addresses(s: &str) -> Vec<String> {
    let bytes: Vec<char> = s.chars().collect();
    let mut result = vec![];
    fn bt(bytes: &[char], start: usize, parts: &mut Vec<String>, result: &mut Vec<String>) {
        if parts.len() == 4 {
            if start == bytes.len() { result.push(parts.join(".")); }
            return;
        }
        for len in 1..=3usize {
            if start + len > bytes.len() { break; }
            let seg: String = bytes[start..start+len].iter().collect();
            if seg.len() > 1 && seg.starts_with('0') { break; }
            if seg.parse::<u32>().unwrap_or(256) > 255 { break; }
            parts.push(seg); bt(bytes, start+len, parts, result); parts.pop();
        }
    }
    bt(&bytes, 0, &mut vec![], &mut result); result
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_subsets() {
        assert_eq!(subsets(&[1,2,3]).len(), 8);
        assert!(subsets(&[1,2,3]).contains(&vec![]));
    }
    #[test]
    fn test_subsets_with_dup() {
        assert_eq!(subsets_with_dup(&mut vec![1,2,2]).len(), 6);
    }
    #[test]
    fn test_combination_sum() {
        let cs = combination_sum(vec![2,3,6,7], 7);
        assert_eq!(cs.len(), 2);
        assert!(cs.contains(&vec![7]));
    }
    #[test]
    fn test_permutations() {
        assert_eq!(permutations(&[1,2,3]).len(), 6);
    }
    #[test]
    fn test_n_queens() {
        assert_eq!(n_queens(4).len(), 2);
    }
    #[test]
    fn test_letter_combinations() {
        let mut lc = letter_combinations("23");
        lc.sort();
        assert_eq!(lc.len(), 9);
        assert!(lc.contains(&"ad".to_string()));
    }
    #[test]
    fn test_restore_ip() {
        let ips = restore_ip_addresses("25525511135");
        assert!(ips.contains(&"255.255.11.135".to_string()));
        assert!(ips.contains(&"255.255.111.35".to_string()));
    }
}
