pub fn length_of_lis(nums: &[i32]) -> usize {
    let mut tails: Vec<i32> = vec![];
    for &n in nums {
        let pos = tails.partition_point(|&x| x < n);
        if pos == tails.len() { tails.push(n); } else { tails[pos] = n; }
    }
    tails.len()
}

#[cfg(test)]
mod length_of_lis_tests {
    use super::*;

    #[test]
    fn test_lis() { assert_eq!(length_of_lis(&[10,9,2,5,3,7,101,18]),4); }
}
