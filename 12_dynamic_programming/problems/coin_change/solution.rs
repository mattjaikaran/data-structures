pub fn coin_change(coins: &[i32], amount: usize) -> i32 {
    let mut dp = vec![i32::MAX; amount + 1]; dp[0] = 0;
    for a in 1..=amount {
        for &c in coins {
            if c as usize <= a && dp[a-c as usize] != i32::MAX {
                dp[a] = dp[a].min(dp[a-c as usize]+1);
            }
        }
    }
    if dp[amount]==i32::MAX { -1 } else { dp[amount] }
}

#[cfg(test)]
mod coin_change_tests {
    use super::*;

    #[test]
    fn test_coin_change() { assert_eq!(coin_change(&[1,5,11],15),3); assert_eq!(coin_change(&[2],3),-1); }
}
