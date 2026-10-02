pub fn longest_common_subsequence(s1: &str, s2: &str) -> usize {
    let (s1, s2): (Vec<char>, Vec<char>) = (s1.chars().collect(), s2.chars().collect());
    let (m, n) = (s1.len(), s2.len());
    let mut dp = vec![vec![0usize; n+1]; m+1];
    for i in 1..=m { for j in 1..=n {
        dp[i][j] = if s1[i-1]==s2[j-1] { dp[i-1][j-1]+1 } else { dp[i-1][j].max(dp[i][j-1]) };
    }}
    dp[m][n]
}

#[cfg(test)]
mod longest_common_subsequence_tests {
    use super::*;

    #[test]
    fn test_lcs() { assert_eq!(longest_common_subsequence("abcde","ace"),3); }
}
