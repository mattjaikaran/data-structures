/// 🟡 Container With Most Water (LC #11)
/// O(n) time, O(1) space.
pub fn container_most_water(heights: &[i32]) -> i32 {
    let (mut l, mut r) = (0usize, heights.len() - 1);
    let mut best = 0;
    while l < r {
        let h = heights[l].min(heights[r]);
        best = best.max(h * (r - l) as i32);
        if heights[l] < heights[r] { l += 1; } else { r -= 1; }
    }
    best
}

#[cfg(test)]
mod container_most_water_tests {
    use super::*;

    #[test]
    fn test_container_most_water() {
            assert_eq!(container_most_water(&[1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
            assert_eq!(container_most_water(&[1, 1]), 1);
        }
}
