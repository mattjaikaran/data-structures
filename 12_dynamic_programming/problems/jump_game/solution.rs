pub fn jump_game(nums: &[i32]) -> bool {
    let mut reach = 0usize;
    for (i, &n) in nums.iter().enumerate() {
        if i > reach { return false; }
        reach = reach.max(i + n as usize);
    }
    true
}

#[cfg(test)]
mod jump_game_tests {
    use super::*;

    #[test]
    fn test_jump_game() { assert!(jump_game(&[2,3,1,1,4])); assert!(!jump_game(&[3,2,1,0,4])); }
}
