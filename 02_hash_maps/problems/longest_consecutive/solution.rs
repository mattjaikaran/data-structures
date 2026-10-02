pub fn longest_consecutive(nums: &[i32]) -> usize {
    let s: HashSet<i32> = nums.iter().copied().collect();
    let mut best = 0;
    for &n in &s {
        if !s.contains(&(n-1)) {
            let mut cur = n; let mut len = 1;
            while s.contains(&(cur+1)) { cur+=1; len+=1; }
            best = best.max(len);
        }
    }
    best
}

#[cfg(test)]
mod longest_consecutive_tests {
    use super::*;

    #[test]
    fn test_longest_consecutive() {
            assert_eq!(longest_consecutive(&[100,4,200,1,3,2]), 4);
            assert_eq!(longest_consecutive(&[0,3,7,2,5,8,4,6,0,1]), 9);
        }
}
