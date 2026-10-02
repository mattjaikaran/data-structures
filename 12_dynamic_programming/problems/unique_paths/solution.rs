pub fn unique_paths(m: usize, n: usize) -> u64 {
    let mut dp = vec![vec![1u64; n]; m];
    for r in 1..m { for c in 1..n { dp[r][c]=dp[r-1][c]+dp[r][c-1]; } }
    dp[m-1][n-1]
}

#[cfg(test)]
mod unique_paths_tests {
    use super::*;

    #[test]
    fn test_unique_paths() { assert_eq!(unique_paths(3,7),28); }
}
