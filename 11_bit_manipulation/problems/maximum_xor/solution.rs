pub fn maximum_xor(nums: &[i32]) -> i32 {
    let (mut max_xor,mut prefix)=(0i32,0i32);
    for i in (0..32).rev() {
        prefix|=1<<i;
        let prefixes:std::collections::HashSet<i32>=nums.iter().map(|&n|n&prefix).collect();
        let candidate=max_xor|(1<<i);
        if prefixes.iter().any(|&p|prefixes.contains(&(candidate^p))) { max_xor=candidate; }
    }
    max_xor
}

#[cfg(test)]
mod maximum_xor_tests {
    use super::*;

    #[test]
    fn test_max_xor() { assert_eq!(maximum_xor(&[3,10,5,25,2,8]),28); }
}
