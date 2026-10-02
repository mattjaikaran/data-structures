/// 🟡 Search in Rotated Sorted Array (LC #33)
/// O(log n) time, O(1) space.
pub fn search_rotated(nums: &[i32], target: i32) -> Option<usize> {
    let (mut l, mut r) = (0usize, nums.len().saturating_sub(1));
    while l <= r {
        let mid = l + (r - l) / 2;
        if nums[mid] == target { return Some(mid); }
        if nums[l] <= nums[mid] {                          // left half sorted
            if nums[l] <= target && target < nums[mid] {
                if mid == 0 { break; }
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {                                           // right half sorted
            if nums[mid] < target && target <= nums[r] {
                l = mid + 1;
            } else {
                if mid == 0 { break; }
                r = mid - 1;
            }
        }
    }
    None
}

#[cfg(test)]
mod search_rotated_tests {
    use super::*;

    #[test]
    fn test_search_rotated() {
            assert_eq!(search_rotated(&[4, 5, 6, 7, 0, 1, 2], 0), Some(4));
            assert_eq!(search_rotated(&[4, 5, 6, 7, 0, 1, 2], 3), None);
            assert_eq!(search_rotated(&[1], 0), None);
        }
}
