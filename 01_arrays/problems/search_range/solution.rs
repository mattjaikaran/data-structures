/// Find the inclusive target range in a sorted slice without mutation.
pub fn search_range(nums: &[i32], target: i32) -> [i32; 2] {
    fn bound(nums: &[i32], target: i32, upper: bool) -> usize {
        let (mut lo, mut hi) = (0, nums.len());
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if nums[mid] < target || (upper && nums[mid] == target) { lo = mid + 1; }
            else { hi = mid; }
        }
        lo
    }
    let first = bound(nums, target, false);
    if first == nums.len() || nums[first] != target { [-1, -1] }
    else { [first as i32, (bound(nums, target, true) - 1) as i32] }
}
#[cfg(test)]
mod search_range_tests {
    use super::*;
    #[test]
    fn boundaries() {
        assert_eq!(search_range(&[1, 2, 2, 2, 4], 2), [1, 3]);
        assert_eq!(search_range(&[2, 2], 2), [0, 1]);
        assert_eq!(search_range(&[2], 2), [0, 0]);
        assert_eq!(search_range(&[1, 3], 2), [-1, -1]);
        assert_eq!(search_range(&[], 2), [-1, -1]);
        assert_eq!(search_range(&[1, 3], 4), [-1, -1]);
    }
}
