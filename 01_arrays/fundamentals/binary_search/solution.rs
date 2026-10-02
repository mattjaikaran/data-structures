/// Binary search on a sorted slice.
/// Returns `Some(index)` or `None`.
/// O(log n) time, O(1) space.
///
/// # Example
/// ```
/// use arrays::binary_search;
/// assert_eq!(binary_search(&[1, 3, 5, 7, 9], 7), Some(3));
/// assert_eq!(binary_search(&[1, 3, 5, 7, 9], 6), None);
/// ```
pub fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    if arr.is_empty() { return None; }
    let mut left = 0;
    let mut right = arr.len() - 1;

    while left <= right {
        let mid = left + (right - left) / 2; // avoids overflow vs (l+r)/2
        match arr[mid].cmp(&target) {
            std::cmp::Ordering::Equal => return Some(mid),
            std::cmp::Ordering::Less  => left = mid + 1,
            std::cmp::Ordering::Greater => {
                if mid == 0 { break; } // prevent usize underflow
                right = mid - 1;
            }
        }
    }
    None
}

#[cfg(test)]
mod binary_search_tests {
    use super::*;

    #[test]
    fn test_binary_search_found() {
            assert_eq!(binary_search(&[1, 3, 5, 7, 9, 11, 13], 7), Some(3));
            assert_eq!(binary_search(&[1, 3, 5, 7, 9], 1), Some(0));    // left boundary
            assert_eq!(binary_search(&[1, 3, 5, 7, 9], 9), Some(4));    // right boundary
        }

    #[test]
    fn test_binary_search_not_found() {
            assert_eq!(binary_search(&[1, 3, 5, 7, 9], 6), None);
            assert_eq!(binary_search(&[1, 3, 5, 7, 9], 0), None);
            assert_eq!(binary_search(&[1, 3, 5, 7, 9], 10), None);
            assert_eq!(binary_search(&[], 5), None);
        }
}
