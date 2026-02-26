//! DYNAMIC PROGRAMMING  ·  Rust

pub fn climbing_stairs(n: usize) -> usize {
    if n <= 2 { return n; }
    let (mut a, mut b) = (1, 2);
    for _ in 3..=n { let c=a+b; a=b; b=c; }
    b
}

pub fn house_robber(nums: &[i32]) -> i32 {
    let (mut a, mut b) = (0, 0);
    for &n in nums { let c=b.max(a+n); a=b; b=c; }
    b
}

pub fn house_robber_ii(nums: &[i32]) -> i32 {
    fn rob(arr: &[i32]) -> i32 { let (mut a,mut b)=(0,0); for &n in arr {let c=b.max(a+n);a=b;b=c;} b }
    nums[0].max(rob(&nums[..nums.len()-1])).max(rob(&nums[1..]))
}

pub fn jump_game(nums: &[i32]) -> bool {
    let mut reach = 0usize;
    for (i, &n) in nums.iter().enumerate() {
        if i > reach { return false; }
        reach = reach.max(i + n as usize);
    }
    true
}

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

pub fn length_of_lis(nums: &[i32]) -> usize {
    let mut tails: Vec<i32> = vec![];
    for &n in nums {
        let pos = tails.partition_point(|&x| x < n);
        if pos == tails.len() { tails.push(n); } else { tails[pos] = n; }
    }
    tails.len()
}

pub fn longest_common_subsequence(s1: &str, s2: &str) -> usize {
    let (s1, s2): (Vec<char>, Vec<char>) = (s1.chars().collect(), s2.chars().collect());
    let (m, n) = (s1.len(), s2.len());
    let mut dp = vec![vec![0usize; n+1]; m+1];
    for i in 1..=m { for j in 1..=n {
        dp[i][j] = if s1[i-1]==s2[j-1] { dp[i-1][j-1]+1 } else { dp[i-1][j].max(dp[i][j-1]) };
    }}
    dp[m][n]
}

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

pub fn unique_paths(m: usize, n: usize) -> u64 {
    let mut dp = vec![vec![1u64; n]; m];
    for r in 1..m { for c in 1..n { dp[r][c]=dp[r-1][c]+dp[r][c-1]; } }
    dp[m-1][n-1]
}

pub fn word_break(s: &str, words: &[&str]) -> bool {
    let word_set: std::collections::HashSet<&str> = words.iter().copied().collect();
    let n = s.len();
    let mut dp = vec![false; n+1]; dp[0]=true;
    for i in 1..=n {
        for j in 0..i {
            if dp[j] && word_set.contains(&s[j..i]) { dp[i]=true; break; }
        }
    }
    dp[n]
}

pub fn partition_equal_subset(nums: &[i32]) -> bool {
    let total: i32 = nums.iter().sum();
    if total%2!=0 { return false; }
    let target = (total/2) as usize;
    let mut dp = vec![false; target+1]; dp[0]=true;
    for &n in nums {
        let n=n as usize;
        for j in (n..=target).rev() { if dp[j-n] { dp[j]=true; } }
    }
    dp[target]
}

pub fn max_product(nums: &[i32]) -> i32 {
    let (mut best, mut cur_max, mut cur_min) = (nums[0], nums[0], nums[0]);
    for &n in &nums[1..] {
        let (a,b) = (cur_max,cur_min);
        cur_max = n.max(a*n).max(b*n);
        cur_min = n.min(a*n).min(b*n);
        best = best.max(cur_max);
    }
    best
}

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

pub fn num_trees(n: usize) -> u64 {
    let mut dp = vec![0u64; n+1]; dp[0]=1; dp[1]=1;
    for i in 2..=n { for j in 1..=i { dp[i]+=dp[j-1]*dp[i-j]; } }
    dp[n]
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_climbing() { assert_eq!(climbing_stairs(5),8); assert_eq!(climbing_stairs(2),2); }
    #[test] fn test_house_robber() { assert_eq!(house_robber(&[2,7,9,3,1]),12); assert_eq!(house_robber(&[1,2,3,1]),4); }
    #[test] fn test_house_robber_ii() { assert_eq!(house_robber_ii(&[2,3,2]),3); assert_eq!(house_robber_ii(&[1,2,3,1]),4); }
    #[test] fn test_jump_game() { assert!(jump_game(&[2,3,1,1,4])); assert!(!jump_game(&[3,2,1,0,4])); }
    #[test] fn test_coin_change() { assert_eq!(coin_change(&[1,5,11],15),3); assert_eq!(coin_change(&[2],3),-1); }
    #[test] fn test_lis() { assert_eq!(length_of_lis(&[10,9,2,5,3,7,101,18]),4); }
    #[test] fn test_lcs() { assert_eq!(longest_common_subsequence("abcde","ace"),3); }
    #[test] fn test_edit() { assert_eq!(edit_distance("horse","ros"),3); }
    #[test] fn test_unique_paths() { assert_eq!(unique_paths(3,7),28); }
    #[test] fn test_word_break() { assert!(word_break("leetcode",&["leet","code"])); }
    #[test] fn test_partition() { assert!(partition_equal_subset(&[1,5,11,5])); assert!(!partition_equal_subset(&[1,2,3,5])); }
    #[test] fn test_max_product() { assert_eq!(max_product(&[2,3,-2,4]),6); assert_eq!(max_product(&[-2,3,-4]),24); }
    #[test] fn test_burst() { assert_eq!(burst_balloons(vec![3,1,5,8]),167); }
    #[test] fn test_num_trees() { assert_eq!(num_trees(3),5); }
}
