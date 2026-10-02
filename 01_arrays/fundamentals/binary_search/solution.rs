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

    #[test]
    fn seeded_reference_and_duplicates() {
        let mut state = 91u32;
        for trial in 0..60 {
            let mut values = Vec::with_capacity(trial % 31);
            for _ in 0..trial % 31 {
                state = state.wrapping_mul(1664525).wrapping_add(1013904223);
                values.push((state % 41) as i32 - 20);
            }
            values.sort();
            state = state.wrapping_mul(1664525).wrapping_add(1013904223);
            let target = (state % 51) as i32 - 25;
            match binary_search(&values, target) {
                Some(index) => assert_eq!(values[index], target),
                None => assert!(!values.contains(&target)),
            }
        }
        assert_eq!(binary_search(&[i32::MIN, 0, i32::MAX], i32::MAX), Some(2));
    }
}
