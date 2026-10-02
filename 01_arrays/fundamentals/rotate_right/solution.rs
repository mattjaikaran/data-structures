/// Rotate a slice right by `k` positions, in place.
/// O(n) time, O(1) space — triple-reversal trick.
pub fn rotate_right(nums: &mut [i32], k: usize) {
    let n = nums.len();
    let k = k % n;
    if k == 0 { return; }
    nums.reverse();          // reverse all
    nums[..k].reverse();     // reverse first k
    nums[k..].reverse();     // reverse rest
}

#[cfg(test)]
mod rotate_right_tests {
    use super::*;

    #[test]
    fn test_rotate_right() {
            let mut v = vec![1, 2, 3, 4, 5];
            rotate_right(&mut v, 2);
            assert_eq!(v, vec![4, 5, 1, 2, 3]);
    
            let mut v2 = vec![1, 2, 3];
            rotate_right(&mut v2, 4); // k > n
            assert_eq!(v2, vec![3, 1, 2]);
        }
}
