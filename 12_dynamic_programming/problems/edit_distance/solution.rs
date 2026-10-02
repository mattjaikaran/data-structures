pub fn edit_distance(w1: &str, w2: &str) -> usize {
    let (w1, w2): (Vec<char>, Vec<char>) = (w1.chars().collect(), w2.chars().collect());
    let (m, n) = (w1.len(), w2.len());
    let mut dp: Vec<Vec<usize>> = (0..=m).map(|i| (0..=n).map(|j| i+j).collect()).collect();
    dp[0][0] = 0;
    for i in 1..=m { for j in 1..=n {
        dp[i][j] = if w1[i-1]==w2[j-1] { dp[i-1][j-1] } else { 1+dp[i-1][j].min(dp[i][j-1]).min(dp[i-1][j-1]) };
    }}
    dp[m][n]
}

#[cfg(test)]
mod edit_distance_tests {
    use super::*;

    #[test]
    fn test_edit() { assert_eq!(edit_distance("horse","ros"),3); }
}
