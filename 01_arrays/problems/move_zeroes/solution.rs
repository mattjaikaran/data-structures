/// 🟢 Move Zeroes (LC #283) — in-place.
/// O(n) time, O(1) space.
pub fn move_zeroes(nums: &mut [i32]) {
    let mut left = 0;
    for right in 0..nums.len() {
        if nums[right] != 0 {
            nums.swap(left, right);
            left += 1;
        }
    }
}

#[cfg(test)]
mod move_zeroes_tests {
    use super::*;

    #[test]
    fn test_move_zeroes() {
            let mut v = vec![0, 1, 0, 3, 12];
            move_zeroes(&mut v);
            assert_eq!(v, vec![1, 3, 12, 0, 0]);
    
            let mut v2 = vec![0];
            move_zeroes(&mut v2);
            assert_eq!(v2, vec![0]);
        }
}
