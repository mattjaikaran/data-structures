/// 🟡 Find the Duplicate Number (LC #287) — Floyd's on array
/// O(n) time, O(1) space.
pub fn find_duplicate(nums: &[usize]) -> usize {
    let mut slow = nums[0];
    let mut fast = nums[0];
    loop {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if slow == fast { break; }
    }
    slow = nums[0];
    while slow != fast {
        slow = nums[slow];
        fast = nums[fast];
    }
    slow
}

#[cfg(test)]
mod find_duplicate_tests {
    use super::*;

    #[test]
    fn test_find_duplicate() {
            assert_eq!(find_duplicate(&[1, 3, 4, 2, 2]), 2);
            assert_eq!(find_duplicate(&[3, 1, 3, 4, 2]), 3);
        }
}
