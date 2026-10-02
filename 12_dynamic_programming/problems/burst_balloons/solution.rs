pub fn burst_balloons(nums: Vec<i32>) -> i32 {
    let mut arr = vec![1]; arr.extend(&nums); arr.push(1);
    let n = arr.len();
    let mut dp = vec![vec![0i32; n]; n];
    for len in 2..n {
        for l in 0..n-len {
            let r=l+len;
            for k in l+1..r {
                dp[l][r]=dp[l][r].max(arr[l]*arr[k]*arr[r]+dp[l][k]+dp[k][r]);
            }
        }
    }
    dp[0][n-1]
}

#[cfg(test)]
mod burst_balloons_tests {
    use super::*;

    #[test]
    fn test_burst() { assert_eq!(burst_balloons(vec![3,1,5,8]),167); }
}
